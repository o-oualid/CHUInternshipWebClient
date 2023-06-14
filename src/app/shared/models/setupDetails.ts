import {User} from "./User";
import {UserCreationDetails} from "./UserCreationDetails";

export class SetupDetails {
  serverName: String;
  user: UserCreationDetails;

  constructor(serverName: String, user: UserCreationDetails) {
    this.serverName = serverName;
    this.user = user;
  }
}
