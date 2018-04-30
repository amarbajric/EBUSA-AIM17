package at.fhjoanneum.ippr.gateway.security.config;

import org.springframework.context.annotation.Condition;

public interface RBACServiceCondition extends Condition {

  String PROPERTY_NAME = "rbac.system.service.authentication";

}
