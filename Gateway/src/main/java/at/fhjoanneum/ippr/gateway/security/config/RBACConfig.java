package at.fhjoanneum.ippr.gateway.security.config;

import at.fhjoanneum.ippr.gateway.security.authentication.database.AuthenticationServiceDatabaseImpl;
import at.fhjoanneum.ippr.gateway.security.registration.RegistrationService;
import at.fhjoanneum.ippr.gateway.security.registration.RegistrationServiceDatabaseImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

import at.fhjoanneum.ippr.gateway.security.authentication.AuthenticationService;
import at.fhjoanneum.ippr.gateway.security.authentication.memory.AuthenticationServiceMemoryImpl;
import at.fhjoanneum.ippr.gateway.security.rbacmapping.retrieval.RBACRetrievalService;
import at.fhjoanneum.ippr.gateway.security.rbacmapping.retrieval.memory.RBACRetrievalServiceMemoryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class RBACConfig {
  private static final Logger LOG = LoggerFactory.getLogger(RBACConfig.class);

  /**
   * These beans are always loaded
   */
  @Bean(name = "registrationService")
  public RegistrationService databaseRegistrationService() {
    LOG.info("Loaded Bean {}", RegistrationServiceDatabaseImpl.class);
    return new RegistrationServiceDatabaseImpl(); }

  @Bean(name = "passwordEncoder")
  public PasswordEncoder passwordEncoder() {
    LOG.info("Loaded Bean {}", BCryptPasswordEncoder.class);
    return new BCryptPasswordEncoder();
  }


  /**
   *  These two configs are used for memory and Cached objects
   */
  @Bean(name = "rbacRetrievalService")
  @Conditional(RBACMemoryCondition.class)
  public RBACRetrievalService userGroupMemoryService() {
    LOG.info("Loaded Bean {}", RBACRetrievalServiceMemoryImpl.class);
    return new RBACRetrievalServiceMemoryImpl(); }

  @Bean(name = "authenticationService")
  @Conditional(RBACMemoryCondition.class)
  public AuthenticationService memoryAuthenticationService() {
    LOG.info("Loaded Bean {}", AuthenticationServiceMemoryImpl.class);
    return new AuthenticationServiceMemoryImpl(); }


  /**
   *  These two configs are used for database
   */
  // TODO: Exclude rbacretrievalservice when using database to avoid mapping users from csv to db and so on
  @Bean(name = "rbacRetrievalService")
  @Conditional(RBACDatabaseCondition.class)
  public RBACRetrievalService rbacRepository() {
    LOG.info("Loaded Bean {}", RBACRetrievalServiceMemoryImpl.class);
    return new RBACRetrievalServiceMemoryImpl(); }

  @Bean(name = "authenticationService")
  @Conditional(RBACDatabaseCondition.class)
  public AuthenticationService databaseAuthenticationService() {
    LOG.info("Loaded Bean {}", AuthenticationServiceDatabaseImpl.class);
    return new AuthenticationServiceDatabaseImpl(); }

}
