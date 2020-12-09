//Imports de servicios, items, etc.//
import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { NgForm, Form } from '@angular/forms';
import { Ingreso } from 'src/app/models/ingreso.model';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from 'src/app/services/categorias.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { EstadosService } from 'src/app/services/estados.service';
import { InventarioSQLService } from 'src/app/services/inventario-sql.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { IngresosService } from 'src/app/services/ingresos.service';

@Component({
  selector: 'app-reingreso',
  templateUrl: './reingreso.component.html',
  styleUrls: ['./reingreso.component.css']
})

export class ReingresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

  inventario: any = [];
  categorias: any = [];
  unidades: any = [];
  estados: any = [];
  ubicaciones: any = [];
  subcategorias: any = [];
  cantidadIngreso: number = 0;
  valido: boolean = true;

  idsReingreso = [
    {id: "", cantidad: 1}
  ];

  constructor(private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUnidades: UnidadesService,
              private servicioEstados: EstadosService,
              private servicioInventario: InventarioSQLService,
              private servicioUbicaciones: UbicacionesService,
              private servicioIngresos: IngresosService) { }

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe(
      res => {this.categorias = res;},
      err => console.log(err));

    this.servicioSubcategorias.getSubcategorias().subscribe(
      res => {this.subcategorias = res;},
      err => console.log(err));

    this.servicioInventario.getInventario().subscribe(
      res => {this.inventario = res;},
      err => console.log(err));

    this.servicioUnidades.getUnidades().subscribe(
      res => {this.unidades = res;},
      err => console.log(err));

    this.servicioUbicaciones.getUbicaciones().subscribe(
      res => {this.ubicaciones = res;},
      err => console.log(err));

    this.servicioEstados.getEstados().subscribe(
      res => {this.estados = res;},);
  }

  regresarIndice(indice: number) {
    return this.inventario.findIndex(item => item.id == this.idsReingreso[indice].id);
  }

   //Con el id del item ubicado, se suma la cantidad a agregar ingresada por el usuario en el item del id que haga match//
  reingresarItems() {
    for(let item of this.idsReingreso) {
      let nuevoItem = Object.assign({},this.inventario.find(itemInv => itemInv.id == item.id));
      let itemListaIngresos = Object.assign({},nuevoItem);

      if(item.cantidad == nuevoItem.cantidadObra) {
        nuevoItem.estado = "Disponible";
        nuevoItem.cantidadObra = 0;
      }
      else if(item.cantidad < nuevoItem.cantidadObra){
        nuevoItem.estado = "En Obra";
        nuevoItem.cantidadObra -= item.cantidad;
      }

      //CAMPOS FALTANTES EN INGRESO
      itemListaIngresos.cantidad = item.cantidad;

      nuevoItem.cantidad += item.cantidad;
      nuevoItem.categoria = this.categorias.find(cat => cat.nombre == nuevoItem.categoria).id;
      nuevoItem.subcategoria = this.subcategorias.find(subcat => subcat.nombre == nuevoItem.subcategoria).id;
      nuevoItem.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == nuevoItem.ubicacion).id;
      nuevoItem.unidades = this.unidades.find(und => und.nombre == nuevoItem.unidades).id;
      nuevoItem.estado = this.estados.find(est => est.nombre == nuevoItem.estado).id;

      this.servicioInventario.updateItem(nuevoItem.id, nuevoItem, true).subscribe(
        res => {          
          console.log(res);
          console.log(res["text"]);
          this.registrarIngreso(+nuevoItem.id, itemListaIngresos);
        },
        err => {console.log(err);}
      );

    }
    this.form.reset();
    this.idsReingreso = [{id: "", cantidad: 1}];
  }

  // FUNCION QUE REGISTRA REINGRESO EN BD DE INGRESOS
  registrarIngreso(id: any, itemListaIngresos){
    let ingreso = {
      nombre_item_ingresado: itemListaIngresos.nombre,
      id_categoria_item_ingresado: +this.categorias.find(cat => cat.nombre == itemListaIngresos.categoria).id,
      id_unidad_item_ingresado: +this.unidades.find(und => und.nombre == itemListaIngresos.unidades).id,
      id_modalidad: +2,
      cantidad: +itemListaIngresos.cantidad,
      cedula_responsable_ingreso: 10470050,
      precio: +itemListaIngresos.precio
    }
    this.servicioIngresos.createIngreso(ingreso).subscribe(
      res => { console.log(res); },
      err => { console.log(err); }
    );
  }

  borrarForm() {
    this.form.reset();
    this.idsReingreso = [{id: "", cantidad: 1}];
  }

  agregarItem() {
    this.idsReingreso.push({id: "", cantidad: 1});
  }

  restarItem() {
    this.idsReingreso.pop();
  }

  revisarCantidad() {
    for(let item of this.idsReingreso){
      if(item.cantidad <= 0) {
        this.valido = false;
        return
      }
    }
    this.valido = true;
  }

  restaurarValor(i: number) {
    this.idsReingreso[i].cantidad = 1;
    this.revisarCantidad();
  }

}

