package at.fhjoanneum.ippr.gateway.api.services.impl;

import at.fhjoanneum.ippr.gateway.api.repositories.OrganizationRepository;
import at.fhjoanneum.ippr.gateway.api.services.OrganizationService;
import at.fhjoanneum.ippr.gateway.security.persistence.entities.OrganizationBuilder;
import at.fhjoanneum.ippr.gateway.security.persistence.entities.OrganizationImpl;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Role;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;
import at.fhjoanneum.ippr.gateway.security.registration.RegistrationServiceDatabaseImpl;
import at.fhjoanneum.ippr.gateway.security.repositories.RBACRepository;
import at.fhjoanneum.ippr.gateway.security.services.RBACService;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

@Service
public class OrganizationServiceImpl implements OrganizationService {
    private static final Logger LOG = LoggerFactory.getLogger(RegistrationServiceDatabaseImpl.class);

    @Autowired
    private OrganizationRepository organizationRepository;

    @Autowired
    private RBACService rbacService;

    @Autowired
    private RBACRepository rbacRepository;


    @Override
    public Organization getOrganizationByOrganizationId(final Long oId) {
        return organizationRepository.getOrganizationByOrganizationId(oId).get();
    }

    @Override
    public Future<List<Organization>> getOrganizations() {
        return new AsyncResult<List<Organization>>(organizationRepository.getOrganizations());
    }

    @Override
    public Optional<Organization> saveOrganization(Long userId, String orgName, String orgDescription)
            throws ExecutionException, InterruptedException {
        if (StringUtils.isEmpty(orgName) || StringUtils.isEmpty(orgDescription)) {
            LOG.info("Could not save new organization. One or more properties missing.");
            return Optional.empty();
        }

        User user = rbacService.getUserByUserId(userId);
        Boolean isPartOfOrg = user.getRoles().stream().anyMatch(role -> role.getName().equals("ORG_CEO") || role.getName().equals("ORG_EMP"));
        Optional<Role> ceoRole = rbacService.getRoleByRoleName("ORG_CEO").get();

        if (!isPartOfOrg && ceoRole.isPresent()) {
            List<Role> newUserRoles = Lists.newArrayList();
            newUserRoles.addAll(user.getRoles());
            newUserRoles.add(ceoRole.get());
            user.setRoles(newUserRoles);
        } else {
            return Optional.empty();
        }

        Organization newOrg = new OrganizationBuilder()
                .organizationName(orgName)
                .organizationDescription(orgDescription)
                .systemId(orgName.toUpperCase()+"_SYS_ID")
                .build();

        organizationRepository.saveOrganization(newOrg);
        Optional<Organization> orgOpt = organizationRepository.getOrganizationByOrganizationName(orgName);

        user.setOrganization((OrganizationImpl) orgOpt.get());
        rbacRepository.saveUser(user);

        return orgOpt;
    }

    @Override
    public Optional<Organization> updateOrganization(Long oId, String orgName, String orgDescription,
                                                     List<Process> processes) {

        final Optional<Organization> orgToUpdate = organizationRepository.getOrganizationByOrganizationId(oId);

        if (!orgToUpdate.isPresent()) {
            return Optional.empty();
        }

        if (orgName != null) orgToUpdate.get().setOrganizationName(orgName);
        if (orgDescription != null) orgToUpdate.get().setOrganizationDescription(orgDescription);
        // TODO: Set or update new processes of org.
        // <TBD>

        organizationRepository.saveOrganization(orgToUpdate.get());
        return organizationRepository.getOrganizationByOrganizationId(oId);
    }
}
