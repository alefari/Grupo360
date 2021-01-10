import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWarehouse, faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private auth: AuthService, private router: Router) { }

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
