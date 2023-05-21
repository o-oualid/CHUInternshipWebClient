export class UserInvite {
  constructor(firstName: string, lastName: string, email: string, role: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }

  firstName: string;
  lastName: string;
  email: string;
  role: string;

}
