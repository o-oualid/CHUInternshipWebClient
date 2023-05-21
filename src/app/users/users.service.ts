import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Page} from "../utils/Page";
import {User} from "../models/User";
import {UserInvite} from "../models/UserInvite";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(page = 0, sort = "id", asc: boolean = true, size = 20) {
    const headers: { Authorization: string } = {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
    };
    return this.http.get<Page<User>>(`${environment.apiEndPoint}/users?size=${size}&page=${page}&sort=${sort},${asc ? 'asc' : 'desc'}`, {headers});
  }

  invite(invite: UserInvite) {
    const headers: { Authorization: string } = {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
    };
    return this.http.post(environment.apiEndPoint + "/users/invite", invite, {headers});
  }

  getInvitedUser(inviteCode: string) {
    return this.http.get<User>(environment.apiEndPoint + `/users/invited/${inviteCode}`);
  }

  getUser(id: bigint) {
    const headers: { Authorization: string } = {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
    };
    return this.http.get<User>(environment.apiEndPoint + `/users/${id}`, {headers});
  }
}
