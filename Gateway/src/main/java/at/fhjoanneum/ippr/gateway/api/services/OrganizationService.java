package at.fhjoanneum.ippr.gateway.api.services;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;

import java.util.List;
import java.util.concurrent.Future;

public interface OrganizationService {

    public Organization getOrganizationByOrganizationId(Long oId);

    public Future<List<Organization>> getOrganizations();

}
