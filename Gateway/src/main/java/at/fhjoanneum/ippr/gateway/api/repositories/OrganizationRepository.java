package at.fhjoanneum.ippr.gateway.api.repositories;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;

import java.util.List;
import java.util.Optional;

public interface OrganizationRepository {

    Optional<Organization> getOrganizationByOrganizationId(Long oId);

    Optional<Organization> getOrganizationByOrganizationName(String name);

    List<Organization> getOrganizations();

    Organization saveOrganization(Organization org);
}
