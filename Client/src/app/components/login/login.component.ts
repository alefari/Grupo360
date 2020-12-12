import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  ingresar() {
    this.router.navigate(['inventario']);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
