import {Role} from '../_models/role.enum';
export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}
