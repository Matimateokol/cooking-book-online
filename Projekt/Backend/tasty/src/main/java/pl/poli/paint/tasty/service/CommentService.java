package pl.poli.paint.tasty.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.poli.paint.tasty.dto.CommentDTO;
import pl.poli.paint.tasty.entity.Comment;
import pl.poli.paint.tasty.entity.Post;
import pl.poli.paint.tasty.repository.CommentRepository;
import pl.poli.paint.tasty.repository.PostRepository;
import pl.poli.paint.tasty.repository.UserRepository;
import pl.poli.paint.tasty.shared.mapper.CommentMapper;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public List<CommentDTO> getCommentsByPost(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("Post not found with id: " + postId));
        List<Comment> comments = commentRepository.findByPost(post);
        return CommentMapper.toCommentsListDTO(comments);
    }

    public CommentDTO createComment(CommentDTO commentDTO) {
        Comment comment = CommentMapper.toCommentEntity(commentDTO);
        var author = userRepository.findById(commentDTO.getAuthorId());
        var post = postRepository.findById(commentDTO.getPostId());

        if (post.isPresent() && author.isPresent()) {
            comment.setPost(post.get());
            comment.setAuthor(author.get());
        }

        comment.setCreated(new Date());
        comment.setContent(commentDTO.getContent());

        Comment savedComment = commentRepository.save(comment);
        return CommentMapper.toCommentDTO(savedComment);
    }

    public CommentDTO updateComment(CommentDTO commentDTO) {
        var postId = commentDTO.getPostId();
        Comment comment = commentRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("Comment not found with id: " + postId));
        comment.setContent(commentDTO.getContent());
        comment.setUpdated(new Date());
        Comment updatedComment = commentRepository.save(comment);
        return CommentMapper.toCommentDTO(updatedComment);
    }

    public boolean deleteComment(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Comment not found with id: " + id));
        commentRepository.delete(comment);
        return true;
    }


}
