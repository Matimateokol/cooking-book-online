package pl.poli.paint.tasty.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pl.poli.paint.tasty.dto.UserDTO;
import pl.poli.paint.tasty.entity.User;
import pl.poli.paint.tasty.service.UserService;
import pl.poli.paint.tasty.shared.mapper.UserMapper;

import java.net.URI;

@RestController
@RequestMapping("/api/users/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{email}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<UserDTO> getUserByEmail(@PathVariable String email) {
        if (email == null || email.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = userService.getUserByEmail(email);
        return ResponseEntity.ok(UserMapper.toUserDTO(user));
    }

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userToCreate) {
        User user = userService.createUser(userToCreate);
        return ResponseEntity.created(URI.create("/api/users" + user.getId()))
                .body(UserMapper.toUserDTO(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        User user = userService.updateUser(id, userDTO);
        return ResponseEntity.ok(UserMapper.toUserDTO(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.getUserById(id) == null) {
            ResponseEntity.badRequest().build();
        }

        userService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }
}
