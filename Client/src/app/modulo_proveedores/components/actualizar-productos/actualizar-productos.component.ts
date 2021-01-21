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
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  //VARRIABLES DE BD
  productosProveedores:any = [];
  areas:any = [];
  proveedores: any = [];
  idProducto = null;

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

  datosProveedor: any = {
    id: null,
    nombre: null,
    id_area: null,
    direccion: null,
    correo: null,
    telefono: null,
    contacto: null,
    rif: null,
    descripcion: null
    }

  precioNuevo:number = null;
  
  productoProveedorBorrar: any = {
    id: null,
    nombre: null,
  }

  constructor(private servicioProductosProveedores: ProductosProveedoresService,
              private servicioAreas: AreasService,
              private servicioProveedores: ProveedoresService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.idProducto = this.route.snapshot.params['id'];
    this.servicioProductosProveedores.getProductosProveedores().subscribe(
      res => {this.productosProveedores = res;},
      err => console.log(err));   
    this.servicioAreas.getAreas().subscribe(
      res => {this.areas = res;},
      err => console.log(err));  
    this.servicioProveedores.getProveedores().subscribe(
      res => {this.areas = res;
      this.proveedores.find},
      err => console.log(err)); 
    this.datosProveedor = Object.assign({}, this.productosProveedores.find(producto => producto.id == this.idProducto));
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
}
