package at.fhjoanneum.ippr.commons.dto.processstore;

public class ProcessAvgRatingDTO {

    private static final long serialVersionUID = 207598749794256949L;

    private Integer numberOfRatings;
    private Double averageRating;

    public ProcessAvgRatingDTO() {}

    public ProcessAvgRatingDTO(Integer numberOfRatings, Double averageRating) {
        this.numberOfRatings = numberOfRatings;
        this.averageRating = averageRating;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getNumberOfRatings() {
        return numberOfRatings;
    }

    public void setNumberOfRatings(Integer numberOfRatings) {
        this.numberOfRatings = numberOfRatings;
    }

    public Double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(Double averageRating) {
        this.averageRating = averageRating;
    }
}
