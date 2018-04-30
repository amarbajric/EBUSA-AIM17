package at.fhjoanneum.ippr.gateway.security.registration;

import at.fhjoanneum.ippr.gateway.security.persistence.objects.User;

import java.util.Optional;

public interface RegistrationService {

    Optional<User> registerUser(String firstname, String lastname, String username, String email, String password);

    Optional<User> checkIfMailTaken(String email);
}
