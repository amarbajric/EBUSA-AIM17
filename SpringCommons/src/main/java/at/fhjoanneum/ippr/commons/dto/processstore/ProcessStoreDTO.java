package at.fhjoanneum.ippr.commons.dto.processstore;

import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.Date;

@XmlRootElement
public class ProcessStoreDTO implements Serializable {

    private static final long serialVersionUID = 2075853829794256949L;

    private Long processId;

    private String processName;
    private String processDescription;
    private String processCreator;
    private Date processCreatedAt;
    private Long processVersion;
    private Double processPrice;
    private String processApprover;
    private String processApproverComment;
    private Boolean isApproved;
    private Date processApprovedDate;

    public ProcessStoreDTO() {}

    public ProcessStoreDTO(final Long processId, final String processName, final String processDescription, final String processCreator, final Date processCreatedAt, final Long processVersion, final Double processPrice, final String processApprover, final String processApproverComment, final Boolean isApproved, final Date processApprovedDate) {
        this.processId = processId;
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
    }

    public Long getProcessId() { return processId; }

    public String getProcessName() { return processName; }

    public String getProcessDescription() {
        return processDescription;
    }

    public String getProcessCreator() {
        return processCreator;
    }

    public Date getProcessCreatedAt() {
        return processCreatedAt;
    }

    public Long getProcessVersion() {
        return processVersion;
    }

    public Double getProcessPrice() {
        return processPrice;
    }

    public String getProcessApprover() {
        return processApprover;
    }

    public String getProcessApproverComment() {
        return processApproverComment;
    }

    public Boolean isApproved() {
        return isApproved;
    }

    public Date getProcessApprovedDate() {
        return processApprovedDate;
    }
}
