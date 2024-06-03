package pl.poli.paint.tasty.shared.mapper;

import lombok.experimental.UtilityClass;
import pl.poli.paint.tasty.dto.UserDTO;
import pl.poli.paint.tasty.entity.User;

import java.util.Base64;

@UtilityClass
public class UserMapper {

    public static UserDTO toUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setMiddleName(user.getMiddleName());
        userDTO.setLastName(user.getLastName());
        userDTO.setAddress(user.getAddress());
        userDTO.setEmail(user.getEmail());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setBio(user.getBio());
        userDTO.setMedia(user.getMedia());

        if (user.getProfilePicture() != null) {
            byte[] decodedBytes = Base64.getDecoder().decode(user.getProfilePicture());
            String decodedString = new String(decodedBytes);
            userDTO.setPhoneNumber(decodedString);
        }

        return userDTO;
    }

    public static User toEntity(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setAddress(userDTO.getAddress());
        user.setBio(user.getBio());
        userDTO.setMedia(user.getMedia());

        if (userDTO.getProfilePicture() != null) {
            byte[] encodedBytes = Base64.getEncoder().encode(userDTO.getProfilePicture().getBytes());
            user.setProfilePicture(encodedBytes);
        }

        return user;
    }
}
