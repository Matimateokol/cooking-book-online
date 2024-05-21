/* tslint:disable */
/* eslint-disable */
import { CommentResponse } from './comment-response';
import { Links } from './links';
export interface CollectionModelComment {
  '_embedded'?: {
'comments'?: Array<CommentResponse>;
};
  '_links'?: Links;
}
