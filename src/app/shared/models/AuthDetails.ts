import {User} from "./User";

export class AuthDetails {

  public token: string;

  public ttl: Date;

  public user: User;

  constructor(token: string, ttl: Date, user: User) {
    this.token = token;
    this.ttl = ttl;
    this.user = user;
  }
}
