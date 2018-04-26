package at.fhjoanneum.ippr.gateway.security.persistence.objects;

import at.fhjoanneum.ippr.gateway.security.persistence.entities.ProcessStoreImpl;
import at.fhjoanneum.ippr.gateway.security.persistence.entities.UserImpl;

public interface Review {

    Long getReviewId();

    User getApprover();

    void setApprover(UserImpl user);

    User getUploader();

    void setUploader(UserImpl uploader);

    ProcessStoreImpl getProcess();

    void setProcess(ProcessStoreImpl process);

    boolean isApproved();

    void setIsApproved(boolean approved);

    String getComment();

    void setComment(String comment);
}
