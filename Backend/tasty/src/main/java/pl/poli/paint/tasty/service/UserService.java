package pl.poli.paint.tasty.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.poli.paint.tasty.dto.UserDTO;
import pl.poli.paint.tasty.entity.User;
import pl.poli.paint.tasty.repository.UserRepository;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public User getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        log.info("Successfully fetched User with given id [ID: {}]", id);
        return user;
    }

    public User getUserByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(ResourceNotFoundException::new);
        log.info("Successfully fetched User with given email [Email: {}]", email);
        return user;
    }

    public User createUser(UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User newUser = userRepository.save(user);
        log.info("Successfully created new User");
        return newUser;
    }

    public User updateUser(Long id, UserDTO userDTO) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setFirstName(userDTO.getFirstName());
            user.setMiddleName(userDTO.getMiddleName());
            user.setLastName(userDTO.getLastName());
            user.setAddress(userDTO.getAddress());
            user.setBirthDate(userDTO.getBirthDate());
            user.setEmail(userDTO.getEmail());
            log.info("Successfully updated User with given id [ID: {}]", id);
            return userRepository.save(user);
        } else {
            log.info("Could not update User with given id [ID: {}]", id);
            return null;
        }
    }

    public void deleteUserById(Long id) {
        log.info("Successfully deleted User with given id [ID: {}]", id);
        userRepository.deleteById(id);
    }
}
