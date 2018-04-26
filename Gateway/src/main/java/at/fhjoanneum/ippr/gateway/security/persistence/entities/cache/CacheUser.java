package at.fhjoanneum.ippr.gateway.security.persistence.entities.cache;

import static com.google.common.base.Preconditions.checkArgument;
import static com.google.common.base.Preconditions.checkNotNull;

import java.util.List;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.Organization;
import org.apache.commons.lang3.StringUtils;

public class CacheUser {

  private final String systemId;
  private final String firstname;
  private final String lastname;
  private final String username;
  private final List<CacheRole> roles;
  private final String password;
  private final String email;

  public CacheUser(final String systemId, final String firstname, final String lastname,
      final String username, final String email, final List<CacheRole> groups) {
    this(systemId, firstname, lastname, username, email, groups, StringUtils.EMPTY);
  }

  public CacheUser(final String systemId, final String firstname, final String lastname, final String username,
                   final String email, final List<CacheRole> roles, final String password) {
    checkArgument(StringUtils.isNotBlank(systemId));
    checkArgument(StringUtils.isNotBlank(firstname));
    checkArgument(StringUtils.isNotBlank(lastname));
    checkArgument(StringUtils.isNotBlank(username));
    checkNotNull(roles);

    this.systemId = systemId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.roles = roles;
    this.password = password;
  }

  public String getSystemId() {
    return systemId;
  }

  public String getFirstname() {
    return firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public String getUsername() {
    return username;
  }

  public List<CacheRole> getRoles() {
    return roles;
  }

  public String getPassword() {
    return password;
  }

  public String getEmail() { return email; }
}
