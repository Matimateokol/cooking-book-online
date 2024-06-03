/* tslint:disable */
/* eslint-disable */
import { Post } from './post';
import { User } from './user';
export interface Comment {
  author?: User;
  content?: string;
  created?: string;
  id?: number;
  post?: Post;
  updated?: string;
}
