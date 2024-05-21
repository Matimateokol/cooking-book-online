package pl.poli.paint.tasty.auth;

import org.springframework.security.core.Authentication;

public interface AuthFacadeInterface {

    Authentication getAuthentication();
}
