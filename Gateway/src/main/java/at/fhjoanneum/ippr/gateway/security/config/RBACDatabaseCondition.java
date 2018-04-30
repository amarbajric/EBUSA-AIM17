package at.fhjoanneum.ippr.gateway.security.config;

import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.type.AnnotatedTypeMetadata;

public class RBACDatabaseCondition implements RBACServiceCondition {

    private static String CONFIG_VALUE = "database";

    @Override
    public boolean matches(final ConditionContext context, final AnnotatedTypeMetadata metadata) {
        return context.getEnvironment().getProperty(PROPERTY_NAME).contains(CONFIG_VALUE);
    }
}
