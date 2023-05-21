export class UserJoin {
  inviteCode: String;
  password: String;

  constructor(inviteCode: String, password: String) {
    this.inviteCode = inviteCode;
    this.password = password;
  }
}
