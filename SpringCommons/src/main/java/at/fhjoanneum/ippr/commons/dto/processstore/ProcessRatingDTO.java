package at.fhjoanneum.ippr.commons.dto.processstore;

import java.util.Date;

public class ProcessRatingDTO {

    private static final long serialVersionUID = 2075853829794256949L;

    //private Long ratingId;

    private Integer rating;
    private String ratingComment;
    private String createdBy;
    private Date createdAt;
    private Integer processId;

    public ProcessRatingDTO() {}

    public ProcessRatingDTO(Long ratingId, Integer rating, String ratingComment, String createdBy, Date createdAt, Integer processId) {
        //this.ratingId = ratingId;
        this.rating = rating;
        this.ratingComment = ratingComment;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.processId = processId;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    /*public Long getRatingId() {
        return ratingId;
    }

    public void setRatingId(Long ratingId) {
        this.ratingId = ratingId;
    }*/

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getRatingComment() {
        return ratingComment;
    }

    public void setRatingComment(String ratingComment) {
        this.ratingComment = ratingComment;
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
