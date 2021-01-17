import { identifierName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//SERVICIOS IMPORTADOS
import { AreasService } from 'src/app/services/areas.service';
import { ProveedoresService } from '../../../services/proveedores.service'

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductosProveedoresService } from 'src/app/services/productos-proveedores.service';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;

  //VARIABLES QUE ALMACENAN DATOS DE BD
  areas: any = [];
  proveedores:any = [];
  unidades: any = [];

  //VARIABLES DE FUNCIONES
  nuevoProducto: any = 
    {
      id: null,
      nombre: null,
      area: null,
      unidad: null,
      proveedor: null,
      fecha_act: null,
      precio: null,
    };
  valido: boolean = true;

  constructor(private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService,
              private servicioProductosProveedores: ProductosProveedoresService,
              private servicioUnidades: UnidadesService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioAreas.getAreas().subscribe(
      res => {this.areas = res;},
      err => console.log(err));
    this.servicioProveedores.getProveedores().subscribe(
      res => {this.proveedores = res;},
      err => console.log(err));
    this.servicioUnidades.getUnidades().subscribe(
      res => {this.unidades = res;},
      err => console.log(err));
  }

  //FUNCION PARA AGREGAR PRODUCTO A BD
  onSubmit(){
    let productoNuevo = this.nuevoProducto
    if(productoNuevo.nombre!=null && productoNuevo.nombre!="" &&
      productoNuevo.area!=null && productoNuevo.area!="" &&
      productoNuevo.proveedor!=null && productoNuevo.proveedor!="" &&
      productoNuevo.precio!=null && productoNuevo.precio!="" &&
      productoNuevo.unidad!=null && productoNuevo.unidad!=""){
      this.servicioProductosProveedores.createProductoProveedor(productoNuevo).subscribe(
        res => {console.log(res);},
        err => { console.log(err); });
        this.form.reset();
        this.router.navigate(['proveedores/productos']);
    }
  }
  //FUNCION PARA BORRAR FORMULARIO AGREGAR
  borrarForm() {
    this.form.reset();
    this.nuevoProducto = {
      id: null,
      nombre: null,
      area: null,
      unidad: null,
      proveedor: null,
      fecha_act: null,
      precio: null,};
    this.router.navigate(['proveedores/productos']);
  }

  //FUNCION PARA REVISAR EL PRECIO INGRESADO POR EL USUARIO
  revisarPrecio() {
    if(this.nuevoProducto.precio <= 0) {
      this.valido = false;
      return
    }
  this.valido = true;
  }
}
