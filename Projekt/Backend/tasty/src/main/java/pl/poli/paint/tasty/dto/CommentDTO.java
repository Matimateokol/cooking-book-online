package pl.poli.paint.tasty.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class CommentDTO {
    private Long commentId;
    private Long authorId;
    private Long postId;
    private String firstName;
    private String lastName;
    private String content;
    private Date created;
}
