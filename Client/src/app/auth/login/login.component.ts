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

  isLoading = false;
  error: string = null;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.router.navigate(['inventario']);
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    this.error = null;
    const cedula = form.value.cedula;
    const password = form.value.password;

    this.isLoading = true;

    this.auth.signIn(cedula, password).subscribe(
      resData => {
        this.isLoading = false;
        // this.router.navigate(['/menu']);
      }, errorRes => {
        this.error = 'Error: ' + errorRes.error.message;
        this.isLoading = false;
      });
      form.reset();
  }
}
