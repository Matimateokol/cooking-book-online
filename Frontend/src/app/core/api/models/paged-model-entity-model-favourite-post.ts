/* tslint:disable */
/* eslint-disable */
import { EntityModelFavouritePost } from './entity-model-favourite-post';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelFavouritePost {
  '_embedded'?: {
'favouritePosts'?: Array<EntityModelFavouritePost>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
