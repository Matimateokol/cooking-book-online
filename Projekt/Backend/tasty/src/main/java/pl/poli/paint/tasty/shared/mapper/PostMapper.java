package pl.poli.paint.tasty.shared.mapper;

import lombok.experimental.UtilityClass;
import org.modelmapper.ModelMapper;
import pl.poli.paint.tasty.dto.*;
import pl.poli.paint.tasty.entity.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@UtilityClass
public class PostMapper {
    private final ModelMapper modelMapper = new ModelMapper();

    public static PostDTO postDTOWithLikes(Post post, Boolean isLiked, Integer numberOfLikes) {
        var newDto = toPostDTO(post);
        newDto.setIsLikedByUser(isLiked);
        newDto.setNumberOfLikes(numberOfLikes);
        return newDto;
    }

    public static PostDTO toPostDTO(Post post) {
        return PostDTO.builder()
                .postId(post.getId())
                .title(post.getTitle())
                .preparationSteps(post
                        .getPreparationSteps()
                        .stream()
                        .map(preparationStep -> modelMapper.map(preparationStep, PreparationStepDTO.class))
                        .collect(Collectors.toList()))
                .categories(post
                        .getCategories()
                        .stream()
                        .map(category -> modelMapper.map(category, ProductCategoryDTO.class))
                        .collect(Collectors.toList()))
                .ingredients(post
                        .getIngredients()
                        .stream()
                        .map(ingredient -> modelMapper.map(ingredient, IngredientDTO.class))
                        .collect(Collectors.toList()))
                .comments(post
                        .getComments()
                        .stream()
                        .map(comment -> modelMapper.map(comment, CommentDTO.class))
                        .collect(Collectors.toList()))
                .shortDescription(post.getShortDescription())
                .difficulty(post.getDifficulty())
                .cookingTime(post.getCookingTime())
                .author(modelMapper.map(post.getAuthor(), UserDTO.class))
                .created(post.getCreated())
                .updated(post.getUpdated())
                .build();
    }

    public static Post convertToEntity(PostDTO postDTO) {
        Post post = new Post();

        post.setTitle(postDTO.getTitle());
        post.setShortDescription(postDTO.getShortDescription());
        post.setDifficulty(postDTO.getDifficulty());
        post.setCookingTime(postDTO.getCookingTime());
        User author = new User();
        author.setId(postDTO.getAuthor().getId());
        post.setAuthor(author);

        List<Ingredient> ingredients = new ArrayList<>();
        for (IngredientDTO ingredientDTO : postDTO.getIngredients()) {
            Ingredient ingredient = new Ingredient();
            ingredient.setPost(post);
            ingredient.setName(ingredientDTO.getName());
            ingredients.add(ingredient);
        }
        post.setIngredients(ingredients);

        List<PreparationStep> preparationSteps = new ArrayList<>();
        for (PreparationStepDTO preparationStepDTO : postDTO.getPreparationSteps()) {
            PreparationStep preparationStep = new PreparationStep();
            preparationStep.setPost(post);
            preparationStep.setStep(preparationStepDTO.getStep());
            preparationSteps.add(preparationStep);
        }
        post.setPreparationSteps(preparationSteps);

        List<Comment> comments = new ArrayList<>();
        for (CommentDTO commentDTO : postDTO.getComments()) {
            Comment comment = new Comment();
            comment.setPost(post);
            comment.setContent(commentDTO.getContent());
            comments.add(comment);
        }
        post.setComments(comments);

        List<ProductCategory> categories = new ArrayList<>();
        for (ProductCategoryDTO categoryDTO : postDTO.getCategories()) {
            ProductCategory category = new ProductCategory();
            category.setPost(post);
            category.setName(categoryDTO.getName());
            categories.add(category);
        }
        post.setCategories(categories);

        return post;
    }


}
