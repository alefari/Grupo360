import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, Validators } from '@angular/forms';
import { AreasService } from 'src/app/services/areas.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modificar-proveedor',
  templateUrl: './modificar-proveedor.component.html',
  styleUrls: ['./modificar-proveedor.component.css']
})
export class ModificarProveedorComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faPencilAlt = faPencilAlt;
  faTimesCircle = faTimesCircle;

  //VARIABLES QUE ALMACEN INFO DE BD
  proveedores: any = [];
  areas:any = [];

  //VARIABLES DE FUNCIONES
  proveedorElegido: any = 
  {
    id: null,
    nombre: null,
    area: null,
    direccion: null,
    correo: null,
    telefono: null,
    contacto: null,
    rif: null,
    descripcion: null,
  };

  constructor(private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioAreas.getAreas().subscribe(
      res => {this.areas = res;},
      err => console.log(err));
    this.servicioProveedores.getProveedores().subscribe(
      res => {this.proveedores = res;},
      err => console.log(err));
  }

  //ENCUENTRA EL ID DEL PROVEEDOR A MODIFICAR
  alElegirProveedor(idProveedor: string) {
    this.proveedorElegido = Object.assign({}, this.proveedores.find(proveedor => proveedor.id == idProveedor));
    console.log(this.proveedorElegido);
  }

  //FUNCION MODIFICAR PROVEEDOR
  onModificar() {
    this.proveedorElegido.area = this.areas.find(area => area.nombre == this.proveedorElegido.area).id;
    this.servicioProveedores.updateProveedor(this.proveedorElegido.id, this.proveedorElegido).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.router.navigate(['proveedores/proveedores']);
    this.form.reset();
  }

  //FUNCION PARA BORRAR FORMULARIO
  borrarForm() {
    this.form.reset();
    this.router.navigate(['proveedores/proveedores']);
  }
}
