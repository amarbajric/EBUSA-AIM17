package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import at.fhjoanneum.ippr.gateway.security.persistence.Builder;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Rating;
import org.apache.commons.lang3.StringUtils;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

public class RatingBuilder implements Builder<Rating> {


    private Integer rating;
    private UserImpl user;
    private ProcessStoreImpl process;
    private String comment;

    public RatingBuilder rating(Integer rating){
        checkNotNull(rating);
        this.rating = rating;
        return this;
    }

    public RatingBuilder user(UserImpl user){
        checkNotNull(user);
        this.user = user;
        return this;
    }
    public RatingBuilder process(ProcessStoreImpl process){
        checkNotNull(process);
        this.process = process;
        return this;
    }

    public RatingBuilder comment(String comment){
        checkArgument(StringUtils.isNotBlank(comment));
        this.comment = comment;
        return this;
    }

    @Override
    public Rating build() {


        return new RatingImpl(user, process, rating, comment);
    }
}
