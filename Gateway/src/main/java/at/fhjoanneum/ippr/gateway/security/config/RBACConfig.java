package at.fhjoanneum.ippr.gateway.security.config;

import at.fhjoanneum.ippr.gateway.security.authentication.AuthenticationServiceDatabaseImpl;
import at.fhjoanneum.ippr.gateway.security.rbacmapping.retrieval.RBACDatabaseCondition;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

import at.fhjoanneum.ippr.gateway.security.authentication.AuthenticationService;
import at.fhjoanneum.ippr.gateway.security.authentication.memory.AuthenticationServiceMemoryImpl;
import at.fhjoanneum.ippr.gateway.security.rbacmapping.retrieval.RBACRetrievalService;
import at.fhjoanneum.ippr.gateway.security.rbacmapping.retrieval.memory.RBACMemoryCondition;
import at.fhjoanneum.ippr.gateway.security.rbacmapping.retrieval.memory.RBACRetrievalServiceMemoryImpl;

@Configuration
public class RBACConfig {

  /**
   *  These two configs are used for database
   */
  // TODO: Maybe we should inject an own RBACRetrievalServiceDatabaseImpl (an empty class in this case)
  @Bean(name = "rbacRetrievalService")
  @Conditional(RBACDatabaseCondition.class)
  public RBACRetrievalService rbacRepository() {return new RBACRetrievalServiceMemoryImpl(); }

  @Bean(name = "authenticationService")
  @Conditional(RBACDatabaseCondition.class)
  public AuthenticationService databaseAuthenticationService() { return new AuthenticationServiceDatabaseImpl(); }


  /**
   *  These two configs are used for memory and Cached objects
   */
  @Bean(name = "rbacRetrievalService")
  @Conditional(RBACMemoryCondition.class)
  public RBACRetrievalService userGroupMemoryService() {
    return new RBACRetrievalServiceMemoryImpl();
  }

  @Bean(name = "authenticationService")
  @Conditional(RBACMemoryCondition.class)
  public AuthenticationService memoryAuthenticationService() {
    return new AuthenticationServiceMemoryImpl();
  }
}
