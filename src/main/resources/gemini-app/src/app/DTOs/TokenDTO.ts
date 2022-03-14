import { User } from './../model/user';

export class TokenDTO {
  constructor(public tokenString: string, public user: User) {}
}
