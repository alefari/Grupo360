import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargosService } from 'src/app/services/cargos.service';
import { RolesService } from 'src/app/services/roles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-admin-empleados',
  templateUrl: './admin-empleados.component.html',
  styleUrls: ['./admin-empleados.component.css']
})
export class AdminEmpleadosComponent implements OnInit {

  usuarios;
  cargos;
  roles;

  rolesUsuarioAcciones = [];

  editarMode:boolean = false;
  usuarioAcciones:any = {
    nombre: null,
    apellido: null,
    cedula: null,
    cargo: null,
    correo: null,
    roles: null,
  };
  constructor(private servicioUsuarios: UsuariosService,
              private servicioCargos: CargosService,
              private servicioRoles: RolesService,
              private router: Router ) { }

  ngOnInit(): void {
    this.servicioUsuarios.getUsuarios().subscribe(
      res => { this.usuarios = res; console.log(this.usuarios)},
      err => console.log(err)
    );
    this.servicioCargos.getCargos().subscribe(
      res => { this.cargos = res; },
      err => console.log(err)
    );
    this.servicioRoles.getRoles().subscribe(
      res => { this.roles = res; },
      err => console.log(err)
    );
  }

  onSetAcciones(usr:any) {
    this.editarMode = false;
    this.usuarioAcciones = usr;
    this.rolesUsuarioAcciones = [...this.usuarioAcciones.roles]
    console.log('rolesUsuarioaccciones', this.rolesUsuarioAcciones)
  }

  eliminarUser() {

  }

  onEditar() {
    this.editarMode = !this.editarMode;
  }

  onAceptarEdicion() {
    // var cedula = this.usuarioAcciones.cedula;
    this.usuarioAcciones.id_cargo = this.usuarioAcciones.cargo;
    delete this.usuarioAcciones.roles;
    delete this.usuarioAcciones.cargo;
    // delete this.usuarioAcciones.cedula;
    console.log(this.usuarioAcciones);
    this.servicioUsuarios.updateUsuario(this.usuarioAcciones.cedula, this.usuarioAcciones).subscribe(
      res => { console.log(res) },
      err => console.log(err)
    );
  }

  onSalir() {
    this.editarMode = false;
  }

  buscarCargoById(id: number) {
    if(id && this.cargos) return this.cargos.find(cargo => cargo.id == id).nombre
  }
  buscarRolById(id: number) {
    if(id && this.roles) return this.roles.find(rol => rol.id == id).nombre
  }


}
