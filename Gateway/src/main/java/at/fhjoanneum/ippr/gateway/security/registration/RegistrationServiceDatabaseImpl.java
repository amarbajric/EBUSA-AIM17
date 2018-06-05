package at.fhjoanneum.ippr.gateway.security.registration;

import at.fhjoanneum.ippr.gateway.security.persistence.entities.UserBuilder;
import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;
import at.fhjoanneum.ippr.gateway.security.repositories.RBACRepository;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

public class RegistrationServiceDatabaseImpl implements RegistrationService {

    private static final Logger LOG = LoggerFactory.getLogger(RegistrationServiceDatabaseImpl.class);

    @Autowired
    private RBACRepository rbacRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Optional<User> registerUser(String firstname, String lastname, String username, String email, String password) {
        if (StringUtils.isEmpty(firstname) || StringUtils.isEmpty(lastname) || StringUtils.isEmpty(username)
                || StringUtils.isEmpty(email) || StringUtils.isEmpty(password)) {
            LOG.info("Could not register new User. One or more properties missing.");
            return Optional.empty();
        }

        User newUser = new UserBuilder()
                .systemId(email.toUpperCase().replaceAll("\\^[@.-]+","_"))
                .firstname(firstname)
                .lastname(lastname)
                .username(username)
                .email(email)
                .password(passwordEncoder.encode(password))
                // New registered user gets the default role "USER"
                .addRole(rbacRepository.getRoleByRoleName("USER").get())
                .build();

        rbacRepository.saveUser(newUser);
        return rbacRepository.getUserByEmail(email);
    }


    public Optional<User> checkIfMailTaken(String email) {
        if (StringUtils.isEmpty(email)) {
            LOG.info("Could not check if mail is taken. Payload empty!");
            Optional.empty();
        }

        Optional<User> user = rbacRepository.getUserByEmail(email);
        return user;
    }


}
