package at.fhjoanneum.ippr.processstore.persistence.entities;

import at.fhjoanneum.ippr.processstore.persistence.objects.ProcessRatingObject;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

@Entity(name="PROCESSRATING")
@XmlRootElement
public class ProcessRatingObjectImpl implements ProcessRatingObject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long processRatingId;

    //@ManyToOne
    //@JoinColumn(name="process_id")
    @Column
    private Integer processId;

    @Column
    private Integer rating;

    @Column
    @NotBlank
    private String comment;

    @Column
    private String createdBy;

    @Column
    private Date createdAt;

    public ProcessRatingObjectImpl() {
    }

    public ProcessRatingObjectImpl(Integer rating, String comment, String createdBy, Date createdAt, Integer processId) {
        this.rating = rating;
        this.comment = comment;
        this.processId = processId;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }

    @Override
    public Long getProcessRatingId() {
        return processRatingId;
    }

    public void setProcessRatingId(Long processRatingId) {
        this.processRatingId = processRatingId;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getProcessId() {
        return processId;
    }

    public void setProcessId(Integer processId) {
        this.processId = processId;
    }
}
