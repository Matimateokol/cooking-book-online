package pl.poli.paint.tasty.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Builder
public class PostDTO {

    private Long postId;
    private String title;
    private List<PreparationStepDTO> preparationSteps;
    private List<ProductCategoryDTO> categories;
    private List<IngredientDTO> ingredients;
    private List<CommentDTO> comments;
    private String shortDescription;
    private Integer difficulty;
    private Short cookingTime;
    private UserDTO author;
    private Date created;
    private Date updated;
    private String postPicture;
    private Boolean isLikedByUser;
    private Integer numberOfLikes;
}
