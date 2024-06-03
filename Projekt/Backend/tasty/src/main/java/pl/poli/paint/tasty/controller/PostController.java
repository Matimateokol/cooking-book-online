package pl.poli.paint.tasty.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.poli.paint.tasty.dto.PostDTO;
import pl.poli.paint.tasty.service.PostService;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping("")
    public ResponseEntity<List<PostDTO>> getPosts(@RequestParam(defaultValue = "0") Integer pageNo,
                                                  @RequestParam(defaultValue = "10") Integer pageSize,
                                                  @RequestParam(defaultValue = "id") String sortBy)
    {
        Page<PostDTO> pageResult = postService.getAllPosts(pageNo, pageSize, Sort.by(sortBy));
        List<PostDTO> posts = pageResult.getContent();

        if(posts.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("X-TotalCount", Long.toString(pageResult.getTotalElements()));
        return ResponseEntity.ok().headers(headers).body(posts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDTO> getPostById(@PathVariable Long id) {
        PostDTO post = postService.getPostById(id).orElseThrow(ResourceNotFoundException::new);
        return post == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(post);
    }

    @PostMapping()
    public ResponseEntity<PostDTO> createPost(@Valid @RequestBody PostDTO toCreate) {
        PostDTO post = postService.createPost(toCreate);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostDTO> updatePost(@PathVariable Long id, @Valid @RequestBody PostDTO toUpdate) {
        PostDTO updatedPost = postService.updatePost(id, toUpdate);
        return updatedPost != null ? ResponseEntity.ok(updatedPost) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        boolean deleted = postService.deletePost(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
