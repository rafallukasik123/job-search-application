import {Role} from '../_models/role.enum';

/**
 * Zwrotka z user/login
 */

export interface User {
  login: string;
  password: string;
  role: Role;
  token?: string;
}
