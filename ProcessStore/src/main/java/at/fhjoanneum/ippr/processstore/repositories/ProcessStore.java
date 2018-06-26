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

    @Query(value = "SELECT * FROM processstore ps WHERE ps.process_name = :process_name AND ps.process_price = :price", nativeQuery = true)
    public ProcessStoreObjectImpl findProcessByProcessNameAndProcessPrice(@Param("process_name") String processName, @Param("price") Double price);

    @Query(value="SELECT * FROM processstore ps WHERE ps.process_creator = :user_id", nativeQuery = true)
    public List<ProcessStoreObjectImpl> findAllProcessesByUserId(@Param("user_id") String processCreator);

    // No idea atm how to handle this case
    //@Query(value="SELECT * FROM processstore ps WHERE ps.process_creator = :user_id", nativeQuery = true)
    //public ProcessStoreObjectImpl findAllProcessesByOrganisationId(@Param("user_id") String processCreator);

    @Query(value="SELECT * FROM processstore ps WHERE ps.process_approved = :is_approved", nativeQuery = true)
    public List<ProcessStoreObjectImpl> findAllProcesses(@Param("is_approved") boolean isApproved);

    @Modifying
    @Query(value="UPDATE processstore ps SET ps.process_approved = ?1 WHERE ps.process_id = ?2", nativeQuery = true)
    public int changeApprovedState(boolean isApproved, Long processId);

    @Modifying
    @Query(value="UPDATE processstore ps SET ps.process_approver_comment = ?1 WHERE ps.process_id = ?2", nativeQuery = true)
    public int updateApprovedComment(String approverComment, Long processId);

    @Query(value ="SELECT ps.* FROM ippr_store.processstore ps " +
            "INNER JOIN ippr_store.processorgamapping pom "+
            "ON ps.process_id = pom.process_id "+
            "WHERE pom.orga_id = ?1", nativeQuery = true)
    public List<ProcessStoreObjectImpl> findAllProcessesByOrgaId(String orgaId);
}
