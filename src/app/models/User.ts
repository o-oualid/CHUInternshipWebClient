export class User{
  id:BigInt;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  joinedAt:string;
  role:string;


  constructor(id: BigInt, firstName: string, lastName: string, email: string, password: string, joinedAt: string, role: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.joinedAt = joinedAt;
    this.role = role;
  }
}
