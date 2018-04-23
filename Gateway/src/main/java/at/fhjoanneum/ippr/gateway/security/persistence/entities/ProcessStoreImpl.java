package at.fhjoanneum.ippr.gateway.security.persistence.entities;


import at.fhjoanneum.ippr.gateway.security.persistence.objects.ProcessStore;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

@Entity(name="PROCESSSTORE")
@XmlRootElement
public class ProcessStoreImpl implements ProcessStore {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long processId;

    @Column
    @NotBlank
    private String processName;

    @Column
    @NotBlank
    private String processDescription;

    @ManyToOne
    @JoinColumn(name = "u_id")
    private UserImpl creator;

    @Column
    private Date createdAt;

    @Column(columnDefinition = "Integer default '1'")
    @NotBlank
    private Integer version;

    @Column
    @NotBlank
    private Float price;

    @Column
    private String state;

    public ProcessStoreImpl() {}

    public ProcessStoreImpl(String processName, String processDescription, UserImpl creator, Date createdAt, Integer version, Float price, String state) {
        this.processName = processName;
        this.processDescription = processDescription;
        this.creator = creator;
        this.createdAt = createdAt;
        this.version = version;
        this.price = price;
        this.state = state;
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

    @Override
    public String getProcessDescription() {
        return processDescription;
    }

    @Override
    public void setProcessDescription(String processDescription) {
        this.processDescription = processDescription;
    }

    @Override
    public UserImpl getCreator() {
        return creator;
    }

    @Override
    public void setCreator(UserImpl creator) {
        this.creator = creator;
    }

    @Override
    public Date getCreatedAt() {
        return createdAt;
    }

    @Override
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public Integer getVersion() {
        return version;
    }

    @Override
    public void setVersion(Integer version) {
        this.version = version;
    }

    @Override
    public Float getPrice() {
        return price;
    }

    @Override
    public void setPrice(Float price) {
        this.price = price;
    }

    @Override
    public String getState() {
        return state;
    }

    @Override
    public void setState(String state) {
        this.state = state;
    }
}
