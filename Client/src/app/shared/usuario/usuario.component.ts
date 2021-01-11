import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  cedula = null;
  usuario = null;

  constructor(private route: ActivatedRoute,
              private servicioUsuarios: UsuariosService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.cedula = this.route.snapshot.params['id'];
    this.servicioUsuarios.getUsuario(this.cedula).subscribe(
      res => {
        this.usuario = res[0];
      },
      err => console.log(err)
    );
  }

  changePass(form: NgForm) {
    this.auth.changePassword(this.cedula, form.value.password).subscribe(
      resData => {
        console.log(resData);
        form.reset();
      }, errorRes => {
        console.log(errorRes);
      });;
  }


}
