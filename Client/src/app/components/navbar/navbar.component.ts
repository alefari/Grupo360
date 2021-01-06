import { Component, OnDestroy, OnInit } from '@angular/core';
import { faWarehouse, faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

    faWarehouse = faWarehouse;
    faSignInAlt = faSignInAlt;
    faSignOutAlt = faSignOutAlt;
    faUser = faUser;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.auth.user.subscribe(user => {
      this.isAuthenticated = !!user;
      // this.isAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.auth.logout();
  }

}
