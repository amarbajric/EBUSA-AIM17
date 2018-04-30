package at.fhjoanneum.ippr.gateway.security.authentication.database;

import at.fhjoanneum.ippr.gateway.security.authentication.AuthenticationService;
import at.fhjoanneum.ippr.gateway.security.authentication.memory.AuthenticationServiceMemoryImpl;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;
import at.fhjoanneum.ippr.gateway.security.repositories.RBACRepository;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

public class AuthenticationServiceDatabaseImpl implements AuthenticationService {

    private static final Logger LOG = LoggerFactory.getLogger(AuthenticationServiceMemoryImpl.class);

    @Autowired
    private RBACRepository rbacRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public Optional<User> authenticateUser(String email, String password) {
        if (StringUtils.isBlank(email) || StringUtils.isBlank(password)) {
            return Optional.empty();
        }

        Optional<User> reqUser = rbacRepository.getUserByEmail(email);

        if (!reqUser.isPresent()) {
            LOG.info("Could not find user with email {} in database", email);
            return Optional.empty();
        }
        if (!passwordEncoder.matches(password, reqUser.get().getPassword())) {
            LOG.info("Wrong password for user with email {} in database", email);
            return Optional.empty();
        }

        return reqUser;
    }
}
