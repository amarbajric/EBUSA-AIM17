package at.fhjoanneum.ippr.gateway.security.services;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;

import at.fhjoanneum.ippr.commons.dto.user.UserDTO;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Rule;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;

public interface RBACService {

  public User getUserByUserId(Long uId);

  public Future<List<UserDTO>> getUsersOfRule(List<String> ruleNames);

  public Future<List<Rule>> getRules();

  public Optional<User> updateUser(Long uId, String username, String firstName, String lastName, String email,
                                   String password, Long o_id);
}
