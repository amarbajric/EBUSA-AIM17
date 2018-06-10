package at.fhjoanneum.ippr.processstore.repositories;

import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessStoreObjectImpl;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProcessStore extends CrudRepository<ProcessStoreObjectImpl, Long> {

    @Query(value = "SELECT * FROM processstore", nativeQuery = true)
    public List<ProcessStoreObjectImpl> findAllProcesses();

    @Query(value="SELECT * FROM processstore", nativeQuery = true)
    public ProcessStoreObjectImpl findProcessWithId(Long processId);

}
