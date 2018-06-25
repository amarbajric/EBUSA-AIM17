package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.NotBlank;

import com.google.common.base.Objects;
import com.google.common.collect.ImmutableSet;
import com.google.common.collect.Lists;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Role;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Rule;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;

@Entity(name = "user")
@XmlRootElement
public class UserImpl implements User, Serializable {

  private static final long serialVersionUID = -1301447708340607361L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long uId;

  @Column(unique = true)
  @JsonIgnore
  private String systemId;

  @Column
  @NotBlank
  private String firstname;

  @Column
  @NotBlank
  private String lastname;

  @Column
  private String username;

  @Column(unique = true)
  @NotBlank
  private String email;

  @Column
  @JsonIgnore
  @NotBlank
  private String password;

  @ManyToOne
  @JoinColumn(name = "o_id")
  @JsonIgnoreProperties("employees")
  private OrganizationImpl organization;

  @CreationTimestamp
  @Temporal(TemporalType.TIMESTAMP)
  @JsonFormat(pattern = "yyyy-MM-dd")
  @Column(nullable = false, updatable=false)
  Date createdAt;


  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "user_role_map", joinColumns = {@JoinColumn(name = "u_id")},
      inverseJoinColumns = {@JoinColumn(name = "role_id")})
  private List<RoleImpl> roles = Lists.newArrayList();

  UserImpl() {}

  UserImpl(final String firstname, final String lastname, final String username, final String email, final String password,
           final OrganizationImpl organization, final List<RoleImpl> roles, final String systemId) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.organization = organization;
    this.roles = roles;
    this.systemId = systemId;
  }

  @Override
  public Long getUId() {
    return uId;
  }

  @Override
  public String getSystemId() {
    return systemId;
  }

  @Override
  public String getFirstname() {
    return firstname;
  }

  @Override
  public void setFirstname(final String firstname) {
    checkArgument(StringUtils.isNotBlank(firstname));
    this.firstname = firstname;
  }

  @Override
  public String getLastname() {
    return lastname;
  }

  @Override
  public void setLastname(final String lastname) {
    checkArgument(StringUtils.isNotBlank(lastname));
    this.lastname = lastname;
  }

  @Override
  public String getUsername() {
    return username;
  }

  @Override
  public void setUsername(final String username) {
    checkArgument(StringUtils.isNotBlank(username));
    this.username = username;
  }

  @Override
  public String getEmail() {
    return email;
  }

  @Override
  public void setEmail(final String email) {
    checkArgument(StringUtils.isNotBlank(email));
    this.email = email;
  }

  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public OrganizationImpl getOrganization() {
    return organization;
  }

  @Override
  public void setOrganization(OrganizationImpl organizationId) {
    this.organization = organizationId;
  }

  @Override
  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }

  @Override
  public Set<Role> getRoles() {
    return ImmutableSet.copyOf(roles);
  }

  @Override
  public void setRoles(final List<Role> roles) {
    checkNotNull(roles);
    this.roles.clear();
    this.roles = roles.stream().filter(group -> group instanceof RoleImpl)
        .map(group -> (RoleImpl) group).collect(Collectors.toList());
  }

  @Override
  public Set<Rule> getRules() {
    return ImmutableSet.copyOf(roles.stream().map(Role::getRules).flatMap(List::stream)
        .map(rule -> rule).collect(Collectors.toSet()));
  }

  @Override
  public boolean equals(final Object obj) {
    if (obj == null) {
      return false;
    }
    if (!User.class.isAssignableFrom(obj.getClass())) {
      return false;
    }
    final User other = (User) obj;
    if ((this.uId == null) ? (other.getUId() != null) : !this.uId.equals(other.getUId())) {
      return false;
    }
    return true;
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(uId);
  }

  @Override
  public String toString() {
    return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE).append("uId", uId)
        .append("lastname", lastname).append("firstname", firstname).append("email", email)
        .append("username", username).append("orgId",organization.toString()).append("groups", roles)
        .toString();
  }
}
