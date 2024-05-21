/* tslint:disable */
/* eslint-disable */
import { Comment } from './comment';
import { Ingredient } from './ingredient';
import { PreparationStep } from './preparation-step';
import { ProductCategory } from './product-category';
import { User } from './user';
export interface Post {
  author?: User;
  categories?: Array<ProductCategory>;
  comments?: Array<Comment>;
  cookingTime?: number;
  created?: string;
  difficulty?: number;
  id?: number;
  ingredients?: Array<Ingredient>;
  postPicture?: Array<string>;
  preparationSteps?: Array<PreparationStep>;
  shortDescription?: string;
  title?: string;
  updated?: string;
}
