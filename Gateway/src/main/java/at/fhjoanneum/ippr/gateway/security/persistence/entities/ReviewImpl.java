package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Review;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity(name="REVIEW")
@XmlRootElement
public class ReviewImpl implements Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long reviewId;

    @ManyToOne
    @JoinColumn(name = "uploader")
    private UserImpl uploader;

    @ManyToOne
    @JoinColumn(name = "approver")
    private UserImpl approver;

    @ManyToOne
    @JoinColumn(name = "process_id")
    private ProcessStoreImpl process;

    @Column
    private boolean isApproved;

    @Column
    private String comment;

    public ReviewImpl() {}

    public ReviewImpl(UserImpl approver, UserImpl uploader, ProcessStoreImpl process, boolean isApproved, String comment) {
        this.approver = approver;
        this.uploader = uploader;
        this.process = process;
        this.isApproved = isApproved;
        this.comment = comment;
    }


    @Override
    public Long getReviewId() {
        return reviewId;
    }

    @Override
    public UserImpl getApprover() {
        return approver;
    }

    @Override
    public void setApprover(UserImpl user) {
        this.approver = user;
    }

    @Override
    public UserImpl getUploader() {
        return uploader;
    }

    @Override
    public void setUploader(UserImpl uploader) {
        this.uploader = uploader;
    }

    @Override
    public ProcessStoreImpl getProcess() {
        return process;
    }

    @Override
    public void setProcess(ProcessStoreImpl process) {
        this.process = process;
    }

    @Override
    public boolean isApproved() {
        return isApproved;
    }

    @Override
    public void setIsApproved(boolean approved) {
        this.isApproved = approved;
    }

    @Override
    public String getComment() {
        return comment;
    }

    @Override
    public void setComment(String comment) {
        this.comment = comment;
    }
}
