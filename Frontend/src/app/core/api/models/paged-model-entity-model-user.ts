/* tslint:disable */
/* eslint-disable */
import { EntityModelUser } from './entity-model-user';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelUser {
  '_embedded'?: {
'users'?: Array<EntityModelUser>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
