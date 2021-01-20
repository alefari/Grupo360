import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AreasService } from 'src/app/services/areas.service';
import { ProductosProveedoresService } from 'src/app/services/productos-proveedores.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import * as html2pdf from 'html2pdf.js';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @ViewChild('f') form: NgForm;

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
  faSyncAlt = faSyncAlt;

  //VARIABLES QUE ALMACENA INFO DE BD
  proveedores: any = [];
  productosProveedores: any = [];
  areas: any = [];

  //VARIABLES DE FUNCIONES COMPONENT
  datosInfoProducto: any = {
    id: null,
    nombre: null,
    area: null,
    unidad: null,
    nombreProveedor: null,
    fecha_act: null,
    precio: null,
  }

  datosActualizarProducto: any = {
    id: null,
    nombre: null,
    area: null,
    unidad: null,
    nombreProveedor: null,
    fecha_act: null,
    precio: null,
  }
  
  precioNuevo:number = null;
  
  productoProveedorBorrar: any = {
    id: null,
    nombre: null,
  }
  oculto:boolean = true;

  modoActPrecios = false;

  preciosNuevos: any[] = [{
    index: null,
    idProductoAct: null,
    precioNuevo: null,
  }];

  constructor(private servicioProductosProveedores: ProductosProveedoresService,
              private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioProveedores.getProveedores().subscribe(
      res => {this.proveedores = res;},
      err => console.log(err));

      this.servicioProductosProveedores.getProductosProveedores().subscribe(
        res => {this.productosProveedores = res;},
        err => console.log(err));

        this.servicioAreas.getAreas().subscribe(
          res => {this.areas = res;},
          err => console.log(err));

  }

  //FUNCION PARA BOTON DE DETALLES DE PRODUCTO
  asignarDetalles(producto:any){
    this.datosInfoProducto = producto;
  }

  //FUNCION PARA BOTON DE ACTUALIZAR  PRODUCTO
  asignarActualizar(producto:any){
    this.datosActualizarProducto = producto;
    console.log(this.datosActualizarProducto);
  }

  //FUNCION PARA BORRAR PRODUCTO
  actualizarProductoPrecio() {
    if(this.precioNuevo!=null && this.precioNuevo>=0){
      this.servicioProductosProveedores.updatePrecioProducto(this.datosActualizarProducto.id, this.precioNuevo).subscribe(
        res => {console.log(res);
        this.form.reset()},
        err => {console.log(err);});
    } 
  }
  

  //FUNCION PARA BOTON DE BORRAR PRODUCTO (DATOS)
  asignarBorrar(id: number, nombre:string){
    this.productoProveedorBorrar.nombre = nombre;
    this.productoProveedorBorrar.id = id;
  }

  //FUNCION PARA BORRAR PRODUCTO
  eliminarProductoProducto() {
    this.servicioProductosProveedores.deleteProductoProveedor(this.productoProveedorBorrar.id).subscribe(
      res => {console.log(res);},
      err => {console.log(err);});
  }

  //FUNCION PARA DESCARGAR PDF DE PRODUCTO
  descargarPDF() {
    this.oculto = false;
    const opciones = {
      margin: 1,
      filename: 'Productos_Proveedores.pdf',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {},
      jsPDF: {unit: 'cm', format: 'letter', orientation: 'portrait'}
    };

    const contenido: Element = document.getElementById('elemento-a-exportar');

    html2pdf()
      .from(contenido)
      .set(opciones)
      .save();

      this.oculto = true;
  }

  onGuardarCambios() {

  }

  modoActPreciosOn() {
    this.modoActPrecios = true;
  }

}
