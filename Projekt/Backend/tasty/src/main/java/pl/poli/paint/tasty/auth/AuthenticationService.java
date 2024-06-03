package pl.poli.paint.tasty.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.poli.paint.tasty.auth.dto.AuthenticationRequestDTO;
import pl.poli.paint.tasty.auth.dto.AuthenticationResponseDTO;
import pl.poli.paint.tasty.auth.dto.RegisterRequestDTO;
import pl.poli.paint.tasty.entity.Role;
import pl.poli.paint.tasty.entity.User;
import pl.poli.paint.tasty.repository.UserRepository;
import pl.poli.paint.tasty.security.JwtService;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponseDTO register(RegisterRequestDTO request) {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER).build();

        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponseDTO
                .builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponseDTO authenticate(AuthenticationRequestDTO request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User with given email not found."));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponseDTO
                .builder()
                .token(jwtToken)
                .build();
    }
}
