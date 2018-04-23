package at.fhjoanneum.ippr.gateway.security.persistence.objects;

import java.util.Date;
import java.util.List;
import java.util.Set;

public interface User {

  Long getUId();

  String getSystemId();

  String getFirstname();

  void setFirstname(String firstname);

  String getLastname();

  void setLastname(String lastname);

  String getUsername();

  void setUsername(String username);

  String getEmail();

  void setEmail(String email);

  String getPassword();

  void setPassword(String password);

  Long getOrganizationId();

  void setOrganizationId(Long organizationId);

  void setCreatedAt(Date createdAt);

  Set<Role> getRoles();

  Set<Rule> getRules();

  void setRoles(List<Role> groups);
}
