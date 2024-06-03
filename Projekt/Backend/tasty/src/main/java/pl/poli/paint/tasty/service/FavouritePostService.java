package pl.poli.paint.tasty.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.poli.paint.tasty.auth.AuthFacadeInterface;
import pl.poli.paint.tasty.dto.PostDTO;
import pl.poli.paint.tasty.entity.FavouritePost;
import pl.poli.paint.tasty.entity.User;
import pl.poli.paint.tasty.repository.FavouritePostRepository;
import pl.poli.paint.tasty.repository.PostRepository;
import pl.poli.paint.tasty.repository.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavouritePostService {

    private final FavouritePostRepository favouritePostRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final AuthFacadeInterface authFacade;

    @Transactional
    public void likePost(Long id) {
        FavouritePost favouritePost = new FavouritePost();

        var user = userRepository.findById(getCurrentUserId());
        var post = postRepository.findById(id);

        if (user.isPresent() && post.isPresent()) {
            favouritePost.setPost(post.get());
            favouritePost.setUser(user.get());
        }

        favouritePostRepository.save(favouritePost);
    }

    @Transactional
    public boolean unlikePost(Long id) {
        int deletedRows = favouritePostRepository.deleteByPostIdAndUserId(id, getCurrentUserId());
        return deletedRows > 0;
    }

    private Long getCurrentUserId() {
        User user = (User) authFacade.getAuthentication().getPrincipal();
        return user.getId();
    }

    public List<PostDTO> getRecentlyLikedPosts() {
        return List.of();
    }
}
