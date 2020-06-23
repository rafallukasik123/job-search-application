import {Role} from './role.enum' ;
export interface Registration {
  login: string;
  password: string;
  role: Role;
  email: string;
}
