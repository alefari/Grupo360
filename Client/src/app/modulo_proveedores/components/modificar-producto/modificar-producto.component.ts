import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, Validators } from '@angular/forms';
import { AreasService } from 'src/app/services/areas.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { UnidadesService } from 'src/app/services/unidades.service';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductosProveedoresService } from 'src/app/services/productos-proveedores.service';


@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faPencilAlt = faPencilAlt;
  faTimesCircle = faTimesCircle;

  //VARIABLES QUE ALMACEN INFO DE BD
  proveedores: any = [];
  areas:any = [];
  unidades: any = [];
  productosProveedores: any = [];

  //VARIABLES DE FUNCIONES
  productoElegido: any = {
    id: null,
    nombre: null,
    unidad: null,
    nombreProveedor: null,
    fecha_act: null,
    precio: null,
    area: null,
  };
  valido: boolean = true;

  constructor(private servicioProveedores: ProveedoresService,
              private servicioAreas: AreasService,
              private servicioUnidades: UnidadesService,
              private servicioProductosProveedores: ProductosProveedoresService,
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
    this.servicioProductosProveedores.getProductosProveedores().subscribe(
      res => {this.productosProveedores = res;},
      err => console.log(err));
  }
//ENCUENTRA EL ID DEL PRODUCTO A MODIFICAR
alElegirProducto(idProducto: string) {
  this.productoElegido = Object.assign({}, this.productosProveedores.find(producto => producto.id == idProducto));
}

//FUNCION MODIFICAR PRODUCTO
onModificar() {
  this.productoElegido.area = this.areas.find(area => area.nombre == this.productoElegido.area).id;
  this.productoElegido.unidad = this.unidades.find(unidad => unidad.nombre == this.productoElegido.unidad).id;
  this.productoElegido.nombreProveedor = this.proveedores.find(proveedor => proveedor.nombre == this.productoElegido.nombreProveedor).id;
  this.servicioProductosProveedores.updateProductoProveedor(this.productoElegido.id, this.productoElegido).subscribe(
    res => {console.log(res);},
    err => {console.log(err);}
  );
  this.router.navigate(['proveedores/productos']);
  this.form.reset();
}

//FUNCION PARA REVISAR EL PRECIO INGRESADO POR EL USUARIO MODIFICAR
revisarPrecio() {
  if(this.productoElegido.precio <= 0) {
    this.valido = false;
    return
  }
this.valido = true;
console.log(this.productoElegido)
}

//FUNCION PARA BORRAR FORMULARIO
borrarForm() {
  this.form.reset();
  this.router.navigate(['proveedores/productos']);
}
}
