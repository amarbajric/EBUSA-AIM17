package at.fhjoanneum.ippr.processstore.repositories;

import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessRatingObjectImpl;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProcessRating extends CrudRepository<ProcessRatingObjectImpl, Long> {


    @Query(value = "SELECT * FROM processrating", nativeQuery = true)
    public List<ProcessRatingObjectImpl> findAll();

    @Query(value="SELECT * FROM processrating ps WHERE ps.process_id = :process_id", nativeQuery = true)
    public List<ProcessRatingObjectImpl> findProcessRatingByProcessId(@Param("process_id") Long processId);


}
