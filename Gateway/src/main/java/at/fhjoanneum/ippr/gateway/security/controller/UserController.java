package at.fhjoanneum.ippr.gateway.security.controller;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Path;

import at.fhjoanneum.ippr.gateway.security.registration.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import at.fhjoanneum.ippr.commons.dto.user.UserDTO;
import at.fhjoanneum.ippr.gateway.security.authentication.AuthenticationService;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Role;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.Rule;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;
import at.fhjoanneum.ippr.gateway.security.services.RBACService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping(produces = "application/json; charset=UTF-8")
public class UserController {

  @Autowired
  private AuthenticationService authenticationService;

  @Autowired
  private RegistrationService registrationService;

  @Autowired
  private RBACService rbacService;

  @RequestMapping(value = "user/login", method = RequestMethod.POST)
  public ResponseEntity<LoginResponse> login(@RequestBody final UserLogin login) {

    final Optional<User> userOpt =
        authenticationService.authenticateUser(login.email, login.password);

    if (!userOpt.isPresent()) {
      return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    final User user = userOpt.get();

    final List<String> roles =
        user.getRoles().stream().map(Role::getName).collect(Collectors.toList());

    final List<String> rules = user.getRoles().stream().map(Role::getRules).flatMap(List::stream)
        .map(Rule::getName).collect(Collectors.toList());

    final LoginResponse loginResponse = new LoginResponse(
        Jwts.builder().setSubject(user.getUsername()).claim("userId", user.getUId())
            .claim("email", user.getEmail()).claim("roles", roles)
            .claim("rules", rules).setIssuedAt(new Date())
            .setExpiration(java.sql.Date.valueOf(LocalDate.now().plusWeeks(1)))
            .signWith(SignatureAlgorithm.HS256, "secretkey").compact());

    return new ResponseEntity<>(loginResponse, HttpStatus.OK);
  }

  @RequestMapping(value = "user/register", method = RequestMethod.POST)
  public ResponseEntity<RegisterResponse> register(@RequestBody final UserRegister register) {

    final Optional<User> userOpt =
            registrationService.registerUser(register.firstname, register.lastname, register.username, register.email, register.password);

    if (!userOpt.isPresent()) {
      return new ResponseEntity<>(new RegisterResponse("Registration failed: Payload incomplete"), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return new ResponseEntity<>(new RegisterResponse("Ok"), HttpStatus.OK);
  }

  @RequestMapping(value = "user/register/checkIfMailTaken", method = RequestMethod.POST)
  public ResponseEntity<CheckMailResponse> checkIfMailExists(@RequestBody final RegisterMailCheck mailCheck) {

    final Optional<User> userOpt = registrationService.checkIfMailTaken(mailCheck.email);

    if (userOpt == null) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    } else if (!userOpt.isPresent()) {
      return new ResponseEntity<>(new CheckMailResponse(false), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(new CheckMailResponse(true), HttpStatus.OK);
    }
  }

  @RequestMapping(value = "api/me", method = {RequestMethod.GET})
  public User getLoggedInUser(final HttpServletRequest request) throws ServletException {
    final Claims claims = (Claims) request.getAttribute("claims");
    final Integer userId = (Integer) claims.get("userId");

    return rbacService.getUserByUserId(userId.longValue());
  }

  @RequestMapping(value = "api/user/{userId}", method = RequestMethod.GET)
  public User getUser(final HttpServletRequest request,
      @PathVariable(name = "userId", required = true) final Long userId) {
    return rbacService.getUserByUserId(userId);
  }

  @RequestMapping(value = "api/user/{userId}", method = RequestMethod.PUT)
  public ResponseEntity<UpdateResponse> updateUser(@RequestBody final UserUpdate user,
                         @PathVariable(name = "userId", required = true) final Long userId) throws ExecutionException, InterruptedException {

    final Optional<User> updatedUser =
            rbacService.updateUser(userId, user.username, user.firstname, user.lastname, user.email, user.password,
                    user.organizationId);

    return updatedUser.map(user1 -> new ResponseEntity<>(new UpdateResponse("Ok", user1), HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(new UpdateResponse(String.format("Updating User with id %s failed.", userId), null),
            HttpStatus.INTERNAL_SERVER_ERROR));

  }

  @RequestMapping(value = "api/processes/users/rule/{rules}", method = RequestMethod.GET)
  public @ResponseBody Callable<List<UserDTO>> getPossibleUsers(
      @PathVariable("rules") final String[] rules) {

    return () -> {
      return rbacService.getUsersOfRule(Arrays.asList(rules)).get();
    };
  }

  @RequestMapping(value = "api/rules", method = RequestMethod.GET)
  public @ResponseBody Callable<List<Rule>> getRules() {
    return () -> {
      return rbacService.getRules().get();
    };
  }

  private static class UserLogin implements Serializable {
    private static final long serialVersionUID = -431110191246364184L;

    public String email;
    public String password;
  }

  private static class LoginResponse implements Serializable {
    private static final long serialVersionUID = -431110191246364284L;

    public final String token;

    public LoginResponse(final String token) {
      this.token = token;
    }
  }

  private static class UserRegister implements Serializable {
    private static final long serialVersionUID = -431110191246364384L;

    public String firstname;
    public String lastname;
    public String username;
    public String email;
    public String password;
  }

  private static class RegisterResponse implements Serializable {
    private static final long serialVersionUID = -431110191246364484L;

    public final String message;

    public RegisterResponse(final String message) { this.message = message; }
  }

  private static class RegisterMailCheck implements Serializable {
    private static final long serialVersionUID = -431110191246364584L;

    public String email;
  }

  public static class CheckMailResponse implements Serializable {
    private static final long serialVersionUID = -431110191246364684L;

    public final boolean isTaken;

    public CheckMailResponse(final boolean isTaken) { this.isTaken = isTaken; }
  }

  private static class UserUpdate implements Serializable {
    private static final long serialVersionUID = -431110191246364751L;

    public String firstname;
    public String lastname;
    public String username;
    public String email;
    public String password;
    public Long organizationId;
  }

  private static class UpdateResponse implements Serializable {
    private static final long serialVersionUID = -431110191246364999L;

    public final String message;
    public final User user;

    public UpdateResponse(final String message, final User user) { this.message = message; this.user = user; }
  }
}
