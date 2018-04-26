package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import static com.google.common.base.Preconditions.checkArgument;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@Entity(name = "ORGANIZATION")
@XmlRootElement
public class OrganizationImpl implements Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long oId;

    @Column(unique = true)
    private String systemId;

    @Column
    @NotBlank
    private String organizationName;

    @Column
    @NotBlank
    private String organizationDescription;

    @ManyToMany
    @JoinTable(name = "orga_process_map", joinColumns = {@JoinColumn(name = "o_id")},
            inverseJoinColumns = {@JoinColumn(name = "process_id")})
    private List<ProcessStoreImpl> processes = Lists.newArrayList();


    OrganizationImpl() {}

    OrganizationImpl(String systemId, String organizationName, String organizationDescription, List<ProcessStoreImpl> processes) {
        this.organizationName = organizationName;
        this.organizationDescription = organizationDescription;
        this.systemId = systemId;
        this.processes = processes;
    }

    @Override
    public Long getOId() {
        return oId;
    }

    @Override
    public String getSystemId() {
        return systemId;
    }

    @Override
    public String getOrganisationName() {
        return organizationName;
    }

    @Override
    public void setOrganizationName(String organizationName) {
        checkArgument(StringUtils.isNotBlank(organizationName));
        this.organizationName = organizationName;


    }

    @Override
    public String getDescription() {
        return organizationDescription;
    }

    @Override
    public void setOrganizationDescription(String organizationDescription) {
        checkArgument(StringUtils.isNotBlank(organizationDescription));
        this.organizationDescription = organizationDescription;

    }
}
