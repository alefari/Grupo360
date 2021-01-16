import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/app/services/areas.service';
import { ProveedoresService } from '../../../services/proveedores.service'

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faTimesCircle = faTimesCircle;
  faExclamationCircle = faExclamationCircle;
  faPencilAlt = faPencilAlt;
  faPlusCircle = faPlusCircle;
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;

  //VARIABLES QUE ALMACENAN DATOS DE BD
  proveedores: any = [];
  areas: any = [];

  //VARIABLES DE FUNCIONES COMPONENT
  datosInfo: any = {
    id: null,
    nombre: null,
    area: null,
    descripcion: null,
    rif: null,
    contacto: null,
    telefono: null,
    direccion: null,
    correo: null,
  }
  proveedorBorrar: any = {
    id: null,
    nombre: null,
  }

  constructor(private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService) { }

  ngOnInit(): void {
    this.servicioProveedores.getProveedores().subscribe(
      res => {
        this.proveedores = res;
      },
      err => console.log(err)
    );
    this.servicioAreas.getAreas().subscribe(
      res => {
        this.areas = res;
      },
      err => console.log(err)
    );
  }


  //FUNCION PARA BOTON DE DETALLES DE PROVEEDOR
  asignarDetalles(proveedor:any){
    this.datosInfo = proveedor;
  }

  //FUNCION PARA BOTON DE BORRAR PROVEEDOR (DATOS)
  asignarBorrar(id: number, nombre:string){
    this.proveedorBorrar.nombre = nombre;
    this.proveedorBorrar.id = id;
  }

  //FUNCION PARA BORRAR PROVEEDOR
  eliminarProveedor() {
    this.servicioProveedores.deleteProveedor(this.proveedorBorrar.id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
