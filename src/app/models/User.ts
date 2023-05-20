export class User{
  id:BigInt;
  firstName:String;
  lastName:String;
  email:String;
  password:String;
  joinedAt:String;
  role:String;


  constructor(id: BigInt, firstName: String, lastName: String, email: String, password: String, joinedAt: String, role: String) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.joinedAt = joinedAt;
    this.role = role;
  }
}
