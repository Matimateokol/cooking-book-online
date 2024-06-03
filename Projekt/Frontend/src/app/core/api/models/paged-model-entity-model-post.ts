/* tslint:disable */
/* eslint-disable */
import { EntityModelPost } from './entity-model-post';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelPost {
  '_embedded'?: {
'posts'?: Array<EntityModelPost>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
