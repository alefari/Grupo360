import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  ingresar() {
    this.router.navigate(['inventario']);
  }

  onSubmit(form: NgForm) {
    const cedula = form.value.cedula;
    const password = form.value.password;
    // console.log(cedula, password);
    this.authService.signIn(cedula, password).subscribe(resData => {
      console.log(resData);
    }, error => {
      console.log(error);
    });
    form.reset();
  }
}
