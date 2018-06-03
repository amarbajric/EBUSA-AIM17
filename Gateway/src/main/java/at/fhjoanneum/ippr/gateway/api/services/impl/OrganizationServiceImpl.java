package at.fhjoanneum.ippr.gateway.api.services.impl;

import at.fhjoanneum.ippr.gateway.api.repositories.OrganizationRepository;
import at.fhjoanneum.ippr.gateway.api.services.OrganizationService;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.Future;

@Service
public class OrganizationServiceImpl implements OrganizationService {

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
}
