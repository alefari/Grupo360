import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-admin-empleados',
  templateUrl: './admin-empleados.component.html',
  styleUrls: ['./admin-empleados.component.css']
})
export class AdminEmpleadosComponent implements OnInit {

  usuarios;
  usuarioAcciones:any = {
    nombre: null,
    apellido: null,
    cedula: null,
    cargo: null,
    correo: null,
    roles: null,
  };
  constructor(private servicioUsuarios: UsuariosService ) { }

  ngOnInit(): void {
    this.servicioUsuarios.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res;
      },
      err => console.log(err)
    );
  }

  onSetAcciones(usr:any) {
    this.usuarioAcciones = usr;
  }


  eliminarUser() {

  }


}
