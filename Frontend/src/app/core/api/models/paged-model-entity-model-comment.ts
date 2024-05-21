/* tslint:disable */
/* eslint-disable */
import { EntityModelComment } from './entity-model-comment';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelComment {
  '_embedded'?: {
'comments'?: Array<EntityModelComment>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
