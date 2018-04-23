package at.fhjoanneum.ippr.gateway.security.persistence.entities;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.google.common.collect.Lists;

import at.fhjoanneum.ippr.gateway.security.persistence.Builder;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Role;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;

public class UserBuilder implements Builder<User> {

  private String systemId;
  private String firstname;
  private String lastname;
  private String username;
  private String email;
  private String password;
  private OrganizationImpl organization;
  private final List<RoleImpl> roles = Lists.newArrayList();

  public UserBuilder systemId(final String systemId) {
    checkArgument(StringUtils.isNotBlank(systemId));
    this.systemId = systemId;
    return this;
  }

  public UserBuilder firstname(final String firstname) {
    checkArgument(StringUtils.isNotBlank(firstname));
    this.firstname = firstname;
    return this;
  }

  public UserBuilder lastname(final String lastname) {
    checkArgument(StringUtils.isNotBlank(lastname));
    this.lastname = lastname;
    return this;
  }

  public UserBuilder username(final String username) {
    checkArgument(StringUtils.isNotBlank(username));
    this.username = username;
    return this;
  }

  public UserBuilder email(final String email) {
      checkArgument(StringUtils.isNotBlank(email));
      this.email = email;
      return this;
  }

  public UserBuilder password(final String password) {
    checkArgument(StringUtils.isNotBlank(password));
    this.password = password;
    return this;
  }

  public UserBuilder organization(final OrganizationImpl organization) {
    checkNotNull(organization);
    this.organization = organization;
    return this;
  }

  public UserBuilder addRole(final Role role) {
    checkArgument(role instanceof RoleImpl);
    roles.add((RoleImpl) role);
    return this;
  }

  @Override
  public User build() {
    checkArgument(StringUtils.isNotBlank(firstname));
    checkArgument(StringUtils.isNotBlank(lastname));
    checkArgument(StringUtils.isNotBlank(username));
    checkArgument(StringUtils.isNotBlank(email));
    checkArgument(StringUtils.isNotBlank(password));
    checkArgument(!roles.isEmpty());

    return new UserImpl(firstname, lastname, username, email, password, organization, roles, systemId);
  }

}
