package at.fhjoanneum.ippr.processstore.persistence.entities;


import at.fhjoanneum.ippr.processstore.persistence.objects.ProcessStoreObject;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

@Entity(name="PROCESSSTORE")
@XmlRootElement
public class ProcessStoreObjectImpl implements ProcessStoreObject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long processId;

    @Column
    @NotBlank
    private String processName;

    @Column
    @NotBlank
    private String processDescription;

    @Column
    @NotBlank
    private String processCreator;

    @Column
    private Date processCreatedAt;

    @Column
    @NotBlank
    private Long processVersion;

    @Column
    @NotBlank
    private Double processPrice;


    public ProcessStoreObjectImpl() {}

    public ProcessStoreObjectImpl(String processName, String processDescription, String processCreator, Date processCreatedAt, Long processVersion, Double processPrice) {
    }

    @Override
    public Long getStoreId() {
        return processId;
    }

    @Override
    public String getProcessName() {
        return processName;
    }

    @Override
    public void setProcessName(String processName) {
        this.processName = processName;
    }

    public String getProcessDescription() {
        return processDescription;
    }

    public void setProcessDescription(String processDescription) {
        this.processDescription = processDescription;
    }

    public String getProcessCreator() {
        return processCreator;
    }

    public void setProcessCreator(String processCreator) {
        this.processCreator = processCreator;
    }

    public Date getProcessCreatedAt() {
        return processCreatedAt;
    }

    public void setProcessCreatedAt(Date processCreatedAt) {
        this.processCreatedAt = processCreatedAt;
    }

    public Long getProcessVersion() {
        return processVersion;
    }

    public void setProcessVersion(Long processVersion) {
        this.processVersion = processVersion;
    }

    public Double getProcessPrice() {
        return processPrice;
    }

    public void setProcessPrice(Double processPrice) {
        this.processPrice = processPrice;
    }
}
