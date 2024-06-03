package pl.poli.paint.tasty.shared.mapper;

import lombok.experimental.UtilityClass;
import pl.poli.paint.tasty.dto.CommentDTO;
import pl.poli.paint.tasty.entity.Comment;

import java.util.List;
import java.util.stream.Collectors;

@UtilityClass
public class CommentMapper {

    public static CommentDTO toCommentDTO(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setCommentId(comment.getId());
        commentDTO.setAuthorId(comment.getAuthor().getId());
        commentDTO.setPostId(comment.getPost().getId());
        commentDTO.setFirstName(comment.getAuthor().getFirstName());
        commentDTO.setLastName(comment.getAuthor().getLastName());
        commentDTO.setContent(comment.getContent());
        commentDTO.setCreated(comment.getCreated());
        return commentDTO;
    }


    //    TODO: Wrócić do tego
    public static Comment toCommentEntity(CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setId(commentDTO.getCommentId());
//        comment.setAuthor(UserMapper.toEntity(commentDTO.getAuthor()));
//        comment.setAuthor(commentDTO.);
        comment.setContent(commentDTO.getContent());
        comment.setCreated(commentDTO.getCreated());
        return comment;
    }

    public static List<CommentDTO> toCommentsListDTO(List<Comment> commentsList) {
        return commentsList.stream().map(CommentMapper::toCommentDTO).collect(Collectors.toList());
    }
}
