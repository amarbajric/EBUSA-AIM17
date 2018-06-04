package at.fhjoanneum.ippr.gateway.api.services.impl;

import at.fhjoanneum.ippr.gateway.api.repositories.OrganizationRepository;
import at.fhjoanneum.ippr.gateway.api.services.OrganizationService;
import at.fhjoanneum.ippr.gateway.security.persistence.entities.OrganizationBuilder;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import at.fhjoanneum.ippr.gateway.security.registration.RegistrationServiceDatabaseImpl;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;

@Service
public class OrganizationServiceImpl implements OrganizationService {
    private static final Logger LOG = LoggerFactory.getLogger(RegistrationServiceDatabaseImpl.class);

    @Autowired
    private OrganizationRepository organizationRepository;


    @Override
    public Organization getOrganizationByOrganizationId(final Long oId) {
        return organizationRepository.getOrganizationByOrganizationId(oId).get();
    }

    @Override
    public Future<List<Organization>> getOrganizations() {
        return new AsyncResult<List<Organization>>(organizationRepository.getOrganizations());
    }

    @Override
    public Optional<Organization> saveOrganization(String orgName, String orgDescription) {
        if (StringUtils.isEmpty(orgName) || StringUtils.isEmpty(orgDescription)) {
            LOG.info("Could not save new organization. One or more properties missing.");
            return Optional.empty();
        }

        Organization newOrg = new OrganizationBuilder()
                .organizationName(orgName)
                .organizationDescription(orgDescription)
                .systemId(orgName.toUpperCase()+"_SYS_ID")
                .build();

        organizationRepository.saveOrganization(newOrg);
        return organizationRepository.getOrganizationByOrganizationName(orgName);
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
