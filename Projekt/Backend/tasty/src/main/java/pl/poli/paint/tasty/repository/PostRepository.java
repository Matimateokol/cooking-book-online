package pl.poli.paint.tasty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.poli.paint.tasty.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
