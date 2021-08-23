import { Component, OnInit } from '@angular/core';
import { faWarehouse, faSignInAlt, faSignOutAlt, faUser, faHome, faStore, faUsersCog, faUsers, faHammer } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faWarehouse = faWarehouse;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
  faHome = faHome;
  faStore = faStore;
  faUsersCog = faUsersCog;
  faUsers = faUsers;
  faHammer = faHammer;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    // this.userSub = this.auth.user.subscribe(user => {
    //   this.isAuthenticated = !!user;
    //   // EQUIVALENTE A this.isAuthenticated = !user ? false : true;
    // });
  }

}
