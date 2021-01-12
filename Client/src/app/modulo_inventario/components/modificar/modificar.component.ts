//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild, NgModuleDecorator } from '@angular/core';
import { Item } from 'src/app/modulo_inventario/inventario-models/item.model';
import { Categoria } from 'src/app/modulo_inventario/inventario-models/categoria.model';
import { NgForm, Form } from '@angular/forms';

// IMPORTS DE BD
import { InventarioSQLService } from '../../../services/inventario-sql.service';
import { CategoriasService } from '../../../services/categorias.service';
import { UbicacionesService } from '../../../services/ubicaciones.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { EstadosService } from 'src/app/services/estados.service';

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { UnidadesService } from 'src/app/services/unidades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faPencilAlt = faPencilAlt;
  faTimesCircle = faTimesCircle;

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

    //ENCUENTRA EL ID DEL ITEM A MODIFICAR
  alElegirItem(idItem: string) {
    // this.itemElegido = this.inventarioSQL.find(item => item.id == idItem);
    this.itemElegido = Object.assign({}, this.inventarioSQL.find(item => item.id == idItem));
  }

  onModificar() {
    this.itemElegido.categoria = this.categorias.find(cat => cat.nombre == this.itemElegido.categoria).id;
    this.itemElegido.subcategoria = this.subcategorias.find(subcat => subcat.nombre == this.itemElegido.subcategoria).id;
    this.itemElegido.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == this.itemElegido.ubicacion).id;
    this.itemElegido.unidades = this.unidades.find(und => und.nombre == this.itemElegido.unidades).id;
    this.itemElegido.estado = this.estados.find(est => est.nombre == this.itemElegido.estado).id;

    this.servicioInventarioSQL.updateItem(this.itemElegido.id, this.itemElegido, true).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.router.navigate(['inventario']);
    this.form.reset();
  }

  //FUNCION PARA BORRAR FORMULARIO
  borrarForm() {
    this.form.reset();
    this.router.navigate(['inventario']);
  }
}
