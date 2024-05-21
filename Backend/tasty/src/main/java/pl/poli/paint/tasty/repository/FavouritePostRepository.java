package pl.poli.paint.tasty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.poli.paint.tasty.entity.FavouritePost;

public interface FavouritePostRepository extends JpaRepository<FavouritePost, Long> {

    @Query(
            value = "SELECT COUNT(*) FROM favourite_posts fp WHERE fp.post_id = ?1",
            nativeQuery = true
    )
    Integer getCountByPostId(Long postId);


    @Query(
            value = "SELECT COUNT(*) FROM favourite_posts fp WHERE fp.user_id = ?1 AND fp.post_id = ?2",
            nativeQuery = true
    )
    Integer getIfPostWasLikedByUser(Long userId, Long postId);

    @Modifying
    @Query(value = "DELETE FROM FavouritePost p WHERE p.post.id = :postId AND p.user.id = :userId")
    int deleteByPostIdAndUserId(@Param("postId") Long postId, @Param("userId") Long userId);

    //    TODO: Dokończyć
//    @Query(value = "SELECT p, fp FROM Post p, FavouritePost fp WHERE p.id = ")
//    List<PostDTO> getRecentlyLikedPostsByUserId(Long currentUserId);
}