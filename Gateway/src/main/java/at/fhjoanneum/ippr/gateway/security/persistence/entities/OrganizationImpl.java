package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import static com.google.common.base.Preconditions.checkArgument;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.collect.Lists;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;
import java.util.stream.Collectors;

@Entity(name = "organization")
@XmlRootElement
public class OrganizationImpl implements Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long oId;

    @Column(unique = true)
    @JsonIgnore
    private String systemId;

    @Column
    @NotBlank
    private String organizationName;

    @Column
    @NotBlank
    private String organizationDescription;

    @OneToMany(mappedBy = "organization")
    private List<UserImpl> employees = Lists.newArrayList();

    @ManyToMany
    @JoinTable(name = "orga_process_map", joinColumns = {@JoinColumn(name = "o_id")},
            inverseJoinColumns = {@JoinColumn(name = "process_id")})
    private List<ProcessStoreImpl> processes = Lists.newArrayList();


    OrganizationImpl() {}

    OrganizationImpl(String systemId, String organizationName, String organizationDescription,
                     List<ProcessStoreImpl> processes, List<UserImpl> employees) {
        this.organizationName = organizationName;
        this.organizationDescription = organizationDescription;
        this.systemId = systemId;
        this.processes = processes;
        this.employees = employees;
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
    public String getOrganizationName() {
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

    @Override
    public List<UserImpl> getEmployees() { return employees; }

    @Override
    public void setEmployees(final List<UserImpl> employees) {
        this.employees.clear();
        this.employees = employees.stream().filter(UserImpl.class::isInstance)
                .map(employee -> (UserImpl) employee).collect(Collectors.toList());
    }
}
