import {User} from "../../models/User";

export class SetupDetails {
  serverName: String;
  user: User;

  constructor(serverName: String, user: User) {
    this.serverName = serverName;
    this.user = user;
  }
}
