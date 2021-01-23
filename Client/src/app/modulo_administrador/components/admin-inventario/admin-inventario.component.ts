import { Component, OnInit, ViewChild, NgModuleDecorator } from '@angular/core';
import { Item } from 'src/app/modulo_inventario/inventario-models/item.model';
import { NgForm, Form } from '@angular/forms';
import { Router } from '@angular/router';

// IMPORTS DE BD
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { EstadosService } from 'src/app/services/estados.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { InventarioSQLService } from 'src/app/services/inventario-sql.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-inventario',
  templateUrl: './admin-inventario.component.html',
  styleUrls: ['./admin-inventario.component.css']
})
export class AdminInventarioComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faExclamationCircle = faExclamationCircle;

  //VARIABLES QUE CONTIENEN BASES DE DATOS
  inventarioSQL: any = [];
  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any = [];
  unidades: any = [];
  estados: any = [];

  itemElegido: Item = {
    id: null,
    nombre: null,
    categoria: null,
    subcategoria: null,
    cantidad: null,
    ubicacion: null,
    fecha: null,
    responsable: null,
    estado: null,
    vencimiento: null,
    serial: null,
    precio: null,
    unidades: null
  };

  //VARIABLE PARA MODEL DE AVERIA
  itemAveriado: Item = {
    id: null,
    nombre: null,
    categoria: null,
    subcategoria: null,
    cantidad: null,
    unidades: null,
    ubicacion: null,
    estado: null,
    vencimiento: null,
    serial: null,
    precio: null,
  };

  constructor(private servicioInventarioSQL: InventarioSQLService,
              private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUbicaciones: UbicacionesService,
              private servicioUnidades: UnidadesService,
              private servicioEstados: EstadosService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioInventarioSQL.getInventario().subscribe(
      res => {this.inventarioSQL = res;},
      err => console.log(err));

    this.servicioCategorias.getCategorias().subscribe(
      res => {this.categorias = res;},
      err => console.log(err));

    this.servicioSubcategorias.getSubcategorias().subscribe(
      res => {this.subcategorias = res;},
      err => console.log(err));

    this.servicioUbicaciones.getUbicaciones().subscribe(
      res => {this.ubicaciones = res;},
      err => console.log(err));

    this.servicioUnidades.getUnidades().subscribe(
      res => {this.unidades = res;},
      err => console.log(err));

    this.servicioEstados.getEstados().subscribe(
      res => {this.estados = res;},
      err => console.log(err));
  }

  //FUNCIONES DE MODAL REPORTE
  reportarAveria() {
    this.itemAveriado.estado = "Dañado";
    this.itemAveriado.estado = this.estados.find(est => est.nombre == this.itemAveriado.estado).id;
    this.itemAveriado.categoria = this.categorias.find(cat => cat.nombre == this.itemAveriado.categoria).id;
    this.itemAveriado.subcategoria = this.subcategorias.find(subcat => subcat.nombre == this.itemAveriado.subcategoria).id;
    this.itemAveriado.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == this.itemAveriado.ubicacion).id;
    this.itemAveriado.unidades = this.unidades.find(und => und.nombre == this.itemAveriado.unidades).id;
    //MODIFICA ITEM EN BD
    this.servicioInventarioSQL.updateItem(this.itemAveriado.id, this.itemAveriado, true).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  this.router.navigate(['administrador/gestion-interna']);
  this.form.reset();
  }
  reportarReparado() {
    this.itemAveriado.estado = "Disponible";
    this.itemAveriado.estado = this.estados.find(est => est.nombre == this.itemAveriado.estado).id;
    this.itemAveriado.categoria = this.categorias.find(cat => cat.nombre == this.itemAveriado.categoria).id;
    this.itemAveriado.subcategoria = this.subcategorias.find(subcat => subcat.nombre == this.itemAveriado.subcategoria).id;
    this.itemAveriado.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == this.itemAveriado.ubicacion).id;
    this.itemAveriado.unidades = this.unidades.find(und => und.nombre == this.itemAveriado.unidades).id;
    //MODIFICA ITEM EN BD
    this.servicioInventarioSQL.updateItem(this.itemAveriado.id, this.itemAveriado, true).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.router.navigate(['administrador/gestion-interna']);
    this.form.reset();
  }
  //CREA ITEM TEMPORAL EN DONDE COLOCARA NUEVOS ESTADOS
  alElegirItem(idItem: string) {
    this.itemAveriado = Object.assign({},this.inventarioSQL.find(itemInv => itemInv.id == idItem));
  }

  //BUSCA ITEM PARA REPORTAR AVERIA
  regresarItem(id: string) {
    return this.inventarioSQL.find(item => item.id == id);
  }
  //FUNCION PARA BORRAR FORMULARIO REPORTE
  borrarForm() {
    this.form.reset();
    this.router.navigate(['administrador/gestion-interna']);
  }

}

