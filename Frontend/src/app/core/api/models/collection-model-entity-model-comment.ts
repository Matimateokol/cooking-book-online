/* tslint:disable */
/* eslint-disable */
import { EntityModelComment } from './entity-model-comment';
import { Links } from './links';
export interface CollectionModelEntityModelComment {
  '_embedded'?: {
'comments'?: Array<EntityModelComment>;
};
  '_links'?: Links;
}
