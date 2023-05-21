import {User} from "../../models/User";
import {UserCreationDetails} from "../../models/UserCreationDetails";

export class SetupDetails {
  serverName: String;
  user: UserCreationDetails;

  constructor(serverName: String, user: UserCreationDetails) {
    this.serverName = serverName;
    this.user = user;
  }
}
