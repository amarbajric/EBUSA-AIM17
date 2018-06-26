package at.fhjoanneum.ippr.gateway.api.repositories;

import at.fhjoanneum.ippr.gateway.security.persistence.entities.OrganizationImpl;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class OrganizationRepositoryImpl implements OrganizationRepository {

    @Autowired
    private OrganizationRepository organizationRepository;



    @Override
    public Organization saveOrganization(Organization organization) {
        return organizationRepository.save((OrganizationImpl) organization);
    }

    @Override
    public Optional<Organization> getOrganizationByOrganizationId(Long oId) {
        return Optional.ofNullable(organizationRepository.findByOrganizationId(oId));
    }

    @Override
    public Optional<Organization> getOrganizationByOrganizationName(String organizationName){
        return Optional.ofNullable(organizationRepository.findOrganizationByOrganizationName(organizationName));
    }

    @Override
    public List<Organization> getOrganizations() {
        return Lists.newArrayList(organizationRepository.findAll());
    }

    @Repository
    interface OrganizationRepository extends CrudRepository<OrganizationImpl, Long> {

        @Query(value = "SELECT * FROM organization WHERE o_id = :organizationId", nativeQuery = true)
        OrganizationImpl findByOrganizationId(@Param("organizationId") Long organizationId);

        @Query(value = "SELECT * FROM organization WHERE organization_name = :organizationName", nativeQuery = true)
        OrganizationImpl findOrganizationByOrganizationName(@Param("organizationName") String organizationName);
    }

}
