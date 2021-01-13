//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../inventario-models/item.model';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as html2pdf from 'html2pdf.js';

// IMPORTS DE BD
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { EstadosService } from 'src/app/services/estados.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { EliminadosService } from 'src/app/services/eliminados.service';
import { InventarioSQLService } from 'src/app/services/inventario-sql.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
//Se declaran variables de filtros//
export class InventarioComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faTimesCircle = faTimesCircle;
  faExclamationCircle = faExclamationCircle;
  faPencilAlt = faPencilAlt;
  faPlusCircle = faPlusCircle;
  faInfoCircle = faInfoCircle;

  oculto = true;

  datosInfo: Item = {
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
  }

  itemBorrar = {
    id: null,
    nombre: null
  }

  //VARIABLE PARA HACER LAS BUSQUEDA POR ID DEL ITEM DE AVERIA
  idItemElegido:string = null;

  filtroTipo: string = "";
  faSearch = faSearch;

  inventarioSQL: any = [];
  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any = [];
  estados: any = [];
  unidades: any = [];

  constructor(private servicioInventarioSQL: InventarioSQLService,
              private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUbicaciones: UbicacionesService,
              private servicioEstados: EstadosService,
              private servicioUnidades: UnidadesService,
              private servicioEliminados: EliminadosService) { }

//Se adjuntan items de base de datos a la variable inventario, y se ordena items en orden alfabetico//
  ngOnInit(): void {
    this.servicioInventarioSQL.getInventario().subscribe(
      res => {
        this.inventarioSQL = res;
      },
      err => console.log(err)
    );
    this.servicioCategorias.getCategorias().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    );
    this.servicioSubcategorias.getSubcategorias().subscribe(
      res => {
        this.subcategorias = res;
      },
      err => console.log(err)
    );
    this.servicioUbicaciones.getUbicaciones().subscribe(
      res => {
        this.ubicaciones = res;
      },
      err => console.log(err)
    );
    this.servicioEstados.getEstados().subscribe(
      res => {
        this.estados = res;
      },
      err => console.log(err)
    );
    this.servicioUnidades.getUnidades().subscribe(
      res => {
        this.unidades = res;
      },
      err => console.log(err)
    );
  }

  //RECIBE EL ITEM DE LA FILA, E IMPRIME DICHOS DATOS EN UNA VARIABLE
  asignarDetalles(item: Item) {
    this.datosInfo = item;
  }

  // ASIGNA LOS DATOS DEL ITEM A BORRAR EN LA VARIABLE itemBorrar
  asignarBorrar(id, nombre) {
    this.itemBorrar.id = id;
    this.itemBorrar.nombre = nombre;
  }
  // ELIMINA EL ITEM SELECCIONADO DE LA BD CUANDO EL USUARIO ACEPTA EN EL MODAL
  eliminarItem() {

    this.servicioInventarioSQL.deleteItem(this.itemBorrar.id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
      let eliminacion = {
        nombre: this.itemBorrar.nombre,
        cantidad: +this.inventarioSQL.find(item => item.id == this.itemBorrar.id).cantidad,
        cedula_responsable_eliminado: +10470050,
        id_categoria: +this.categorias.find(categoria => categoria.nombre == this.inventarioSQL.find(item => item.id == this.itemBorrar.id).categoria).id,
        id_unidad: +this.unidades.find(unidad => unidad.nombre == this.inventarioSQL.find(item => item.id == this.itemBorrar.id).unidades).id,
      }
      // COMUNICACION CON EL SERVICIO QUE INSERTA ELIMINADO EN BD
      this.servicioEliminados.createEliminado(eliminacion).subscribe(
        res => { console.log(res); },
        err => { console.log(err); }
      );
  }

  //FUNCION PARA DESCARGAR PDF DE INVENTARIO
  descargarPDF() {
    this.oculto = false;
    const opciones = {
      margin: 1,
      filename: 'Inventario.pdf',
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
}
