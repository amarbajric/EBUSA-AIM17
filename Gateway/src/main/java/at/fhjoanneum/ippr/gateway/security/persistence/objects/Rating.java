package at.fhjoanneum.ippr.gateway.security.persistence.objects;

public interface Rating {

    Long getRatingId();

    Integer getRating();

    void setRating(Integer rating);

    String getComment();

    void setComment(String comment);
}
