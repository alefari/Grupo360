import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private servicioUsuarios: UsuariosService) { }

  ngOnInit(): void {
    this.cedula = this.route.snapshot.params['id'];
    this.servicioUsuarios.getUsuario(this.cedula).subscribe(
      res => {
        this.usuario = res[0];
        console.log(this.usuario);
      },
      err => console.log(err)
    );
  }


}
