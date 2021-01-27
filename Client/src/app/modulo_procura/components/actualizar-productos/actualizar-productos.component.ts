import { identifierName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AreasService } from 'src/app/services/areas.service';
import { ProductosProveedoresService } from 'src/app/services/productos-proveedores.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { UnidadesService } from 'src/app/services/unidades.service';

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actualizar-productos',
  templateUrl: './actualizar-productos.component.html',
  styleUrls: ['./actualizar-productos.component.css']
})
export class ActualizarProductosComponent implements OnInit {
  @ViewChild('fi') form: NgForm;

  //ICONOS FONTAWESOME
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  //VARRIABLES DE BD
  productosProveedor:any = [];
  areas:any = [];
  idProducto = null;

  //VARIABLES DE FUNCIONES COMPONENT
  datosInfoProducto: any = {
    id: null,
    nombre: null,
    area: null,
    unidad: null,
    garantia: null,
    dias_garantia: null,
    proveedor: null,
    fecha_act: null,
    precio: null
  }

  datosActualizarProducto: any = {
    id: null,
    nombre: null,
    area: null,
    unidad: null,
    garantia: null,
    dias_garantia: null,
    proveedor: null,
    fecha_act: null,
    precio: null
  }

  datosProveedor: any = {
    id: null,
    nombre: null,
    id_area: null,
    direccion: null,
    correo: null,
    credito: null,
    dias_credito: null,
    ciudad: null,
    telefono: null,
    celular: null,
    contacto: null,
    rif: null,
    descripcion: null
    };

  precioNuevo:number = null;

  productoProveedorBorrar: any = {
    id: null,
    nombre: null,
  }

  constructor(private servicioProductosProveedores: ProductosProveedoresService,
              private servicioAreas: AreasService,
              private servicioProveedores: ProveedoresService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.params['id'];
    this.servicioProductosProveedores.getProductosProveedoresElegido(this.idProducto).subscribe(
      res => {this.productosProveedor = res;},
      err => console.log(err));
    this.servicioAreas.getAreas().subscribe(
      res => {this.areas = res;},
      err => console.log(err));
    this.servicioProveedores.getProveedorElegido(this.idProducto).subscribe(
      res => {this.datosProveedor = res[0];},
      err => console.log(err));
  }

  //FUNCION PARA BOTON DE DETALLES DE PRODUCTO
  asignarDetalles(producto:any){
    this.datosInfoProducto = producto;
  }

  //FUNCION PARA BOTON DE ACTUALIZAR  PRODUCTO
  asignarActualizar(producto:any){
    this.datosActualizarProducto = producto;
  }

  //FUNCION PARA BORRAR PRODUCTO
  actualizarProductoPrecio() {
    if(this.precioNuevo!=null && this.precioNuevo>=0){
      this.servicioProductosProveedores.updatePrecioProducto(this.datosActualizarProducto.id, this.precioNuevo).subscribe(
        res => {console.log(res);},
        err => {console.log(err);});
    }
    this.form.reset();
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
}
