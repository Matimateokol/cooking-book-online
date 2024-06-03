package pl.poli.paint.tasty.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import pl.poli.paint.tasty.auth.AuthFacadeInterface;
import pl.poli.paint.tasty.dto.PostDTO;
import pl.poli.paint.tasty.entity.Ingredient;
import pl.poli.paint.tasty.entity.Post;
import pl.poli.paint.tasty.entity.PreparationStep;
import pl.poli.paint.tasty.entity.User;
import pl.poli.paint.tasty.repository.FavouritePostRepository;
import pl.poli.paint.tasty.repository.PostRepository;
import pl.poli.paint.tasty.shared.mapper.PostMapper;

import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final FavouritePostRepository favouritePostRepository;
    private final ModelMapper modelMapper = new ModelMapper();
    private final AuthFacadeInterface authFacade;

    public Page<PostDTO> getAllPosts(int page, int size, Sort sort) {
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Post> posts = postRepository.findAll(pageable);
        return posts.map(post -> {
            var numberOfLikes = favouritePostRepository.getCountByPostId(post.getId());
            var isLiked = favouritePostRepository.getIfPostWasLikedByUser(getCurrentUserId(), post.getId()) != 0;
            return PostMapper.postDTOWithLikes(post, isLiked, numberOfLikes);
        });
    }

    public Optional<PostDTO> getPostById(Long id) {
        var numberOfLikes = favouritePostRepository.getCountByPostId(id);
        var isLiked = favouritePostRepository.getIfPostWasLikedByUser(getCurrentUserId(), id) != 0;
        return postRepository.findById(id).map(post -> PostMapper.postDTOWithLikes(post, isLiked, numberOfLikes));
    }

    public PostDTO createPost(PostDTO toCreate) {
        Post post = PostMapper.convertToEntity(toCreate);
        post.setCreated(new Date());
        Post savedPost = postRepository.save(post);
        return PostMapper.postDTOWithLikes(savedPost, toCreate.getIsLikedByUser(), 0);
    }

    public PostDTO updatePost(Long id, PostDTO postDTO) {
        Post post = postRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Post not found with id: " + id));
        post.setTitle(postDTO.getTitle());
        post.setShortDescription(postDTO.getShortDescription());
        post.setPreparationSteps(postDTO
                .getPreparationSteps()
                .stream()
                .map(step -> modelMapper.map(step, PreparationStep.class))
                .collect(Collectors.toList()));
        post.setCookingTime(postDTO.getCookingTime());
        post.setIngredients(postDTO
                .getIngredients()
                .stream()
                .map(ingredient -> modelMapper.map(ingredient, Ingredient.class))
                .collect(Collectors.toList()));
        post.setDifficulty(postDTO.getDifficulty());
        post.setUpdated(new Date());
        post.setCategories(post.getCategories());
        Post updatedPost = postRepository.save(post);
        var numberOfLikes = favouritePostRepository.getCountByPostId(id);
        var isLiked = favouritePostRepository.getIfPostWasLikedByUser(getCurrentUserId(), post.getId()) != 0;
        return PostMapper.postDTOWithLikes(updatedPost, isLiked, numberOfLikes);
    }

    public boolean deletePost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Post not found with id: " + id));
        postRepository.delete(post);
        return true;
    }

    private Long getCurrentUserId() {
        User user = (User) authFacade.getAuthentication().getPrincipal();
        return user.getId();
    }
}
