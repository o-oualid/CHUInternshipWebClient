import {User} from "./User";

export class AuthDetails {

  public token: String;

  public ttl: Date;

  public user: User;

  constructor(token: String, ttl: Date, user: User) {
    this.token = token;
    this.ttl = ttl;
    this.user = user;
  }
}
