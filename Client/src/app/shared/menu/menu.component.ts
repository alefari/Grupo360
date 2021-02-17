import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    // this.userSub = this.auth.user.subscribe(user => {
    //   this.isAuthenticated = !!user;
    //   // EQUIVALENTE A this.isAuthenticated = !user ? false : true;
    // });
  }

}
