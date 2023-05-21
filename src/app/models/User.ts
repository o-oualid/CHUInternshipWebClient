export class User {
  id: bigint;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  joinedAt: string;
  role: string;
  active: boolean;


  constructor(id: bigint, firstName: string, lastName: string, email: string, password: string, joinedAt: string, role: string, active: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.joinedAt = joinedAt;
    this.role = role;
    this.active = active;
  }
}
