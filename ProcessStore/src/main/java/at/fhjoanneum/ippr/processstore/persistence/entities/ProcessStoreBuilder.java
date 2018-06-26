package at.fhjoanneum.ippr.processstore.persistence.entities;

import at.fhjoanneum.ippr.processstore.persistence.Builder;
import at.fhjoanneum.ippr.processstore.persistence.objects.ProcessStoreObject;
import org.apache.commons.lang.StringUtils;

import java.util.Date;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

public class ProcessStoreBuilder implements Builder<ProcessStoreObject> {

    private String processName;
    private String processDescription;
    private String processCreator;
    private Date processCreatedAt;
    private Long processVersion;
    private Double processPrice;
    private String processApprover;
    private String processApproverComment;
    private boolean isApproved = false;
    private Date processApprovedDate;
    private byte[] processFile;

    public ProcessStoreBuilder(String processName, String processDescription, String processCreator, Date processCreatedAt,
                               Long processVersion, Double processPrice, String processApprover, String processApproverComment,
                               boolean isApproved, Date processApprovedDate, byte[] processFile) {
        checkArgument(StringUtils.isNotBlank(processName));
        checkArgument(StringUtils.isNotBlank(processDescription));
        checkArgument(StringUtils.isNotBlank(processCreator));
        checkNotNull(processCreatedAt);
        checkNotNull(processVersion);
        checkNotNull(processPrice);
        checkNotNull(isApproved);
        checkNotNull(processFile);
        this.processName = processName;
        this.processDescription = processDescription;
        this.processCreator = processCreator;
        this.processCreatedAt = processCreatedAt;
        this.processVersion = processVersion;
        this.processPrice = processPrice;
        this.processApprover = processApprover;
        this.processApproverComment = processApproverComment;
        this.isApproved = isApproved;
        this.processApprovedDate = processApprovedDate;
        this.processFile = processFile;
    }

    @Override
    public ProcessStoreObject build() {
        checkArgument(StringUtils.isNotBlank(processName));
        checkArgument(StringUtils.isNotBlank(processDescription));
        checkArgument(StringUtils.isNotBlank(processCreator));
        checkNotNull(processCreatedAt);
        checkNotNull(processVersion);
        checkNotNull(processPrice);
        checkNotNull(isApproved);
        checkNotNull(processFile);

        return new ProcessStoreObjectImpl(processName, processDescription, processCreator, processCreatedAt,
                processVersion, processPrice, processApprover, processApproverComment, isApproved, processApprovedDate, processFile);
    }
}
