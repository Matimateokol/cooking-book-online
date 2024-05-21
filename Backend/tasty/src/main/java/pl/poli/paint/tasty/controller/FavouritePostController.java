package pl.poli.paint.tasty.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.poli.paint.tasty.dto.PostDTO;
import pl.poli.paint.tasty.service.FavouritePostService;

@RestController
@RequestMapping("/api/favourite-post")
@RequiredArgsConstructor
public class FavouritePostController {

    private final FavouritePostService favouritePostService;

    @PostMapping("/like/{postId}")
    public ResponseEntity<PostDTO> likePost(@PathVariable Long postId) {
        favouritePostService.likePost(postId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/unlike/{postId}")
    public ResponseEntity<?> unlike(@PathVariable Long postId) {
        var unlikedPost = favouritePostService.unlikePost(postId);
        if (unlikedPost) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    public List<PostDTO> getRecentlyLikedPosts() {
//        return service.getRecentlyLikedPosts();
//    }
}
