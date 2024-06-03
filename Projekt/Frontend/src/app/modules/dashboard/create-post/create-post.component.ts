import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostControllerService } from "../../../core/api/services/post-controller.service";
import { AuthService } from "../../authentication/service/auth.service";
import { UserDto } from "../../../core/api/models/user-dto";
import { difficultyStringToNumberMap } from "../../../shared/utils/difficultyMap";
import { IngredientDto } from "../../../core/api/models/ingredient-dto";
import { PreparationStepDto } from "../../../core/api/models/preparation-step-dto";
import { Router } from "@angular/router";
import { ProductCategoryDto } from "../../../core/api/models/product-category-dto";

@Component({
  selector: 'tasty-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  public categoriesList: string[] = ['Soups', 'Salads', 'Sandwiches/Wraps', 'By Meat', 'Pasta, Rice, Grains', 'Italian',
    'Mexican', 'Casseroles', 'Slow Cooker', 'Family Favorites'];
  public difficulties: string[] = ['Easy', 'Medium', 'Hard'];
  public ingredientsList: IngredientDto[] = [];
  public recipeStepsList: PreparationStepDto[] = [];
  public ingredient = new FormControl('', [Validators.required]);
  public step = new FormControl('', [Validators.required]);
  private user: UserDto;

  public constructor(
    private _authService: AuthService,
    private _postControllerService: PostControllerService,
    private _router: Router,
  ) {
    this._authService.user$.subscribe(user => this.user = user!);
  }

  public recipeForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    shortDescription: new FormControl('', [Validators.required]),
    categories: new FormControl([], [Validators.required]),
    time: new FormControl<number>(0, [Validators.required, Validators.min(1), Validators.max(10080)]),
    difficulty: new FormControl('', [Validators.required]),
  })

  public onAddIngredientClick(): void {
    const ingredient = this.ingredient.value;
    if (ingredient) {
      this.ingredientsList.push({ name: ingredient });
      this.ingredient.reset();
    }
  }

  public onAddStepClick(): void {
    const step = this.step.value;
    if (step) {
      this.recipeStepsList.push({ step });
      this.step.reset();
    }
  }

  public onDeleteStepClick(index: number): void {
    this.recipeStepsList.splice(index, 1);
  }

  public onDeleteIngredientClick(index: number): void {
    this.ingredientsList.splice(index, 1);
  }

  public onFormSubmit(): void {
    const date = new Date(Date.now()).toISOString();

    if (!this.recipeForm.invalid && this.recipeStepsList.length > 0 && this.ingredientsList.length > 0) {
      this._postControllerService.createPost({
        body: {
          author: this.user,
          comments: [],
          cookingTime: this.recipeForm.value.time!,
          created: date,
          difficulty: difficultyStringToNumberMap.get(this.recipeForm.value.difficulty!),
          ingredients: this.ingredientsList,
          preparationSteps: this.recipeStepsList,
          shortDescription: this.recipeForm.value.shortDescription!,
          title: this.recipeForm.value.title!,
          categories: this.getMappedObjectArrayFromCategories(this.recipeForm.value.categories!),
        }
      }).subscribe(_ => this._router.navigate(['/posts']))
    }
  }

  private getMappedObjectArrayFromCategories(categories: string[]) {
    const mappedCategoriesArray: ProductCategoryDto[] = [];

    categories.forEach(category => {
      mappedCategoriesArray.push({ name: category})
    });

    return mappedCategoriesArray;
  }
}
