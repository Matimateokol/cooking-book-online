package pl.poli.paint.tasty.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import pl.poli.paint.tasty.entity.Media;

import java.util.Date;

@Data
@NoArgsConstructor
public class UserDTO {

    private Long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    @ToString.Exclude
    private String password;
    private String address;
    private String phoneNumber;
    private Date birthDate;
    private String profilePicture;
    private Media media;
    private String bio;
}
