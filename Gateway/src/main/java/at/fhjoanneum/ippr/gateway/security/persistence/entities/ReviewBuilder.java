package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import at.fhjoanneum.ippr.gateway.security.persistence.Builder;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Review;
import org.apache.commons.lang3.StringUtils;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

public class ReviewBuilder implements Builder<Review> {

    private UserImpl approver;
    private UserImpl uploader;
    private ProcessStoreImpl process;
    private boolean isApproved;
    private String comment;

    @Override
    public Review build() {
        checkNotNull(approver);
        checkNotNull(uploader);
        checkNotNull(process);
        checkNotNull(isApproved);

        return new ReviewImpl(approver, uploader, process, isApproved, comment);
    }
}
