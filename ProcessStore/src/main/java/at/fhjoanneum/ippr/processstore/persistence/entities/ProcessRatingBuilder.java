package at.fhjoanneum.ippr.processstore.persistence.entities;

import at.fhjoanneum.ippr.processstore.persistence.Builder;
import at.fhjoanneum.ippr.processstore.persistence.objects.ProcessRatingObject;
import org.apache.commons.lang.StringUtils;

import java.util.Date;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

public class ProcessRatingBuilder implements Builder<ProcessRatingObject> {

    private Integer rating;
    private String ratingComment;
    private String createdBy;
    private Date createdAt;
    private Integer process;

    public ProcessRatingBuilder(Integer rating, String ratingComment, String createdBy, Date createdAt, Integer process) {
        this.rating = rating;
        this.ratingComment = ratingComment;
        this.process = process;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }


    @Override
    public ProcessRatingObject build() {
        checkNotNull(rating);
        checkArgument(StringUtils.isNotBlank(ratingComment));
        checkArgument(StringUtils.isNotBlank(createdBy));
        checkNotNull(createdAt);
        checkNotNull(process);

        return new ProcessRatingObjectImpl(rating, ratingComment, createdBy, createdAt, process);
    }
}
