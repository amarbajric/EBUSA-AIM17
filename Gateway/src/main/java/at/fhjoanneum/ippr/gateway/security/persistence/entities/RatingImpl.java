package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Rating;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity(name="RATING")
@XmlRootElement
public class RatingImpl implements Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ratingId;

    @ManyToOne
    @JoinColumn(name="u_id")
    private UserImpl user;

    @ManyToOne
    @JoinColumn(name="process_id")
    private ProcessStoreImpl process;

    @Column
    @NotBlank
    private Integer rating;

    @Column
    private String comment;

    public RatingImpl() {
    }

    public RatingImpl(UserImpl user, ProcessStoreImpl process, Integer rating, String comment) {
        this.user = user;
        this.process = process;
        this.rating = rating;
        this.comment = comment;
    }

    @Override
    public Long getRatingId() {
        return null;
    }

    @Override
    public Integer getRating() {
        return null;
    }

    @Override
    public void setRating(Integer rating) {

    }

    @Override
    public String getComment() {
        return null;
    }

    @Override
    public void setComment(String comment) {

    }
}
