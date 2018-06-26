package at.fhjoanneum.ippr.processstore.repositories;

import at.fhjoanneum.ippr.processstore.persistence.entities.ProcessStoreObjectImpl;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ProcessStore extends CrudRepository<ProcessStoreObjectImpl, Long> {

    @Query(value = "SELECT * FROM processstore", nativeQuery = true)
    public List<ProcessStoreObjectImpl> findAllProcesses();

    @Query(value="SELECT * FROM processstore ps WHERE ps.process_id = :process_id", nativeQuery = true)
    public ProcessStoreObjectImpl findProcessById(@Param("process_id") Long processId);

    @Query(value="SELECT * FROM processstore ps WHERE ps.process_creator = :user_id", nativeQuery = true)
    public List<ProcessStoreObjectImpl> findAllProcessesByUserId(@Param("user_id") String processCreator);

    // No idea atm how to handle this case
    @Query(value="SELECT * FROM processstore ps WHERE ps.process_creator = :user_id", nativeQuery = true)
    public ProcessStoreObjectImpl findAllProcessesByOrganisationId(@Param("user_id") String processCreator);

    @Query(value="SELECT * FROM processstore ps WHERE ps.is_approved = :is_approved", nativeQuery = true)
    public List<ProcessStoreObjectImpl> findAllProcesses(@Param("is_approved") boolean isApproved);

    @Modifying
    @Query(value="UPDATE processstore ps SET ps.is_approved = ?1 WHERE ps.process_id = ?2", nativeQuery = true)
    public int changeApprovedState(boolean isApproved, Long processId);

    @Modifying
    @Query(value="UPDATE processstore ps SET ps.process_approver_comment = ?1 WHERE ps.process_id = ?2", nativeQuery = true)
    public int updateApprovedComment(String approverComment, Long processId);
}
