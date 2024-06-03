/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
export interface UserRequestBody {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  address?: string;
  authorities?: Array<GrantedAuthority>;
  bio?: string;
  birthDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstName?: string;
  id?: number;
  lastName?: string;
  media?: string;
  middleName?: string;
  password?: string;
  phoneNumber?: string;
  profilePicture?: Array<string>;
  role?: 'USER' | 'ADMIN';
  username?: string;
}
