import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductosProveedoresService } from 'src/app/services/productos-proveedores.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  faTrashAlt = faTrashAlt;
  faFileDownload = faFileDownload;
  faSyncAlt = faSyncAlt;
  faPencilAlt = faPencilAlt;
  
  
  //VARIABLES DE BD
  productos: any = [];
  unidades: any =[];

  //VARIABLES DE FUNCIONES
  nuevoProducto: any[] = [{
    id: null,
    nombre: null,
    unidad: null,
  }];

  productoModificar: any = {
    id: null,
    nombre: null,
    unidad: null
  }

  productoBorrar: any = {
    id: null,
    nombre: null,
  }

  constructor(private servicioProductos: ProductosService,
              private servicioUnidades: UnidadesService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioProductos.getProductos().subscribe(
      res => {this.productos = res;},
      err => console.log(err));
    this.servicioUnidades.getUnidades().subscribe(
      res => {this.unidades = res;},
      err => console.log(err));
    }
    
  //FUNCION PARA AGREGAR PRODUCTO A BD
  onSubmit(){
    for(let productoCiclo of this.nuevoProducto){
      if(productoCiclo.nombre!=null && productoCiclo.nombre!="" &&
        productoCiclo.unidad!=null && productoCiclo.unidad!=""){ 
          console.log(productoCiclo);
        this.servicioProductos.createProducto(productoCiclo).subscribe(
          res => {console.log(res);
                  this.form.reset();
                  this.router.navigate(['procura/productos']);},
          err => { console.log(err); });
      }
    }
  }

  //FUNCION PARA BORRAR FORMULARIO AGREGAR
  borrarForm() {
    this.form.reset();
    this.nuevoProducto = [{
      id: null,
      nombre: null,
      unidad: null,}];
    this.router.navigate(['procura/productos']);
  }

  //FUNCIONES DE AGREGAR MULTIPLE
  agregarProducto() {
    this.nuevoProducto.push({
      id: null,
      nombre: null,
      unidad: null});
    }

  //FUNCION PARA BOTON DE MODIFICAR (DATOS)
  asignarModificar(idProducto:string){
    this.productoModificar = Object.assign({}, this.productos.find(producto => producto.id == idProducto));
  }

  //FUNCION MODIFICAR PRODUCTO
  onModificar() {
    this.productoModificar.unidad = this.unidades.find(unidad => unidad.nombre == this.productoModificar.unidad).id;
    console.log(this.productoModificar);
    this.servicioProductos.updateProducto(this.productoModificar.id, this.productoModificar).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
  }

  //FUNCION PARA BOTON DE BORRAR PRODUCTO (DATOS)
  asignarBorrar(id: number, nombre:string){
    this.productoBorrar.nombre = nombre;
    this.productoBorrar.id = id;
  }

  //FUNCION PARA BORRAR PRODUCTO
  eliminarProducto() {
    this.servicioProductos.deleteProducto(this.productoBorrar.id).subscribe(
      res => {console.log(res);},
      err => {console.log(err);});
  }
}
