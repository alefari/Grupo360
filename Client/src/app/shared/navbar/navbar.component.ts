import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faWarehouse, faUsersSlash, faHome, faSignInAlt, faSignOutAlt, faUser, faStore, faUsersCog, faUsers, faHammer } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  cedulaUser:number = null;

    faWarehouse = faWarehouse;
    faSignInAlt = faSignInAlt;
    faSignOutAlt = faSignOutAlt;
    faUser = faUser;
    faHome = faHome;
    faStore = faStore;
    faUsersCog = faUsersCog;
    faUsers = faUsers;
    faHammer = faHammer;

  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.userSub = this.auth.user.subscribe(user => {
      this.isAuthenticated = !!user;
      // EQUIVALENTE A this.isAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  alPerfil() {
    this.router.navigate([`usuario/${this.auth.user.getValue().cedula}`]);
  }

  onLogout() {
    this.auth.logout();
  }

}
