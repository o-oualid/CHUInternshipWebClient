import {Component} from '@angular/core';
import {authStorageService} from "../../services/auth-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  userName = localStorage.getItem("userName");
  email = localStorage.getItem("email");

  constructor(private authStorage: authStorageService, private router: Router) {

  }


  logout() {
    this.authStorage.clearAuth();
    this.router.navigateByUrl("/login")
  }

  protected readonly onsubmit = onsubmit;
}
