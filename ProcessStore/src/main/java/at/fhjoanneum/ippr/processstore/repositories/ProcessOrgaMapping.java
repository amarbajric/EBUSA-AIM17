package at.fhjoanneum.ippr.processstore.repositories;

import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessOrgaMappingObjectImpl;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProcessOrgaMapping extends CrudRepository<ProcessOrgaMappingObjectImpl, Long> {

}
