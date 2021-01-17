import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreasService } from 'src/app/services/areas.service';
import { ProductosProveedoresService } from 'src/app/services/productos-proveedores.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faListAlt = faListAlt;
  faSignOutAlt = faSignOutAlt;
  faTimesCircle = faTimesCircle;
  faExclamationCircle = faExclamationCircle;
  faPencilAlt = faPencilAlt;
  faPlusCircle = faPlusCircle;
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;
  faFileDownload = faFileDownload;

  //VARIABLES QUE ALMACENA INFO DE BD
  proveedores: any = [];
  productosProveedores: any = [];
  areas: any = [];

  constructor(private servicioProductosProveedores: ProductosProveedoresService,
              private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioAreas.getAreas().subscribe(
      res => {this.areas = res;},
      err => console.log(err));

    this.servicioProductosProveedores.getProductosProveedores().subscribe(
      res => {this.productosProveedores = res;},
      err => console.log(err));

    this.servicioProveedores.getProveedores().subscribe(
      res => {this.proveedores = res;},
      err => console.log(err));
      
  }

  asignarDetalles(){

  };
  asignarBorrar(){

  };
}
