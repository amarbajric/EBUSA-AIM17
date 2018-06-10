package at.fhjoanneum.ippr.gateway.api.services;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;

public interface OrganizationService {

    public Organization getOrganizationByOrganizationId(Long oId);

    public Future<List<Organization>> getOrganizations();

    public Optional<Organization> saveOrganization(String name, String description);

    public Optional<Organization> updateOrganization(Long oId, String orgName, String orgDescription,
                                                     List<Process> processes);

}
