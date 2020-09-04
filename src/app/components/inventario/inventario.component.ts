//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/item.model';
import { InventarioService } from '../../services/inventario.service';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { Categoria } from 'src/app/models/categoria.model';
import * as html2pdf from 'html2pdf.js';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { EliminadosService } from 'src/app/services/eliminados.service';
import { Eliminacion } from 'src/app/models/eliminacion.model';


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

  inventario: Item[];
  categorias: Categoria[];
  ubicaciones: any[];
  oculto = true;

  datosInfo: Item = {
    id: null,
    nombre: null,
    tipo: null,
    cantidad: null,
    ubicacion: null,
    fecha: null,
    responsable: null,
    estado: null,
    vencimiento: null,
    serial: null,
    precio: null,
    unidades: null
  }

  itemBorrar = {
    id: null,
    nombre: null
  }

  //VARIABLE PARA MODEL DE AVERIA
  itemAveriado: Item = {
    id: null,
    nombre: null,
    tipo: null,
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

  //VARIABLE PARA HACER LAS BUSQUEDA POR ID DEL ITEM DE AVERIA
  idItemElegido:string = null;

  filtroTipo: string = "";
  faSearch = faSearch;

  constructor(private servicioInventario: InventarioService,
              private servicioCategorias: CategoriasService,
              private servicioUbicaciones: UbicacionesService,
              private servicioEliminados: EliminadosService) { }

//Se adjuntan items de base de datos a la variable inventario, y se ordena items en orden alfabetico//
  ngOnInit(): void {
    this.servicioInventario.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.servicioCategorias.obtenerCategorias().subscribe(items => {
      this.categorias = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.servicioUbicaciones.obtenerUbicaciones().subscribe(items => {
      this.ubicaciones = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
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

    this.servicioInventario.eliminarItem(this.itemBorrar.id);
    var eliminacion: Eliminacion = {
      idItem: this.itemBorrar.id,
      nombreItem: this.itemBorrar.nombre,
      categoriaItem: this.inventario.find(item => item.id == this.itemBorrar.id).tipo,
      unidades: this.inventario.find(item => item.id == this.itemBorrar.id).unidades,
      fecha: new Date().toISOString(),
      cantidad: this.inventario.find(item => item.id == this.itemBorrar.id).cantidad
    }
    this.servicioEliminados.agregarEliminado(eliminacion);
  }

  //BUSCA ITEM PARA REPORTAR AVERIA
  regresarIndice() {
    return this.inventario.findIndex(item => item.id == this.idItemElegido);
}
  regresarItem(id: string) {
    return this.inventario.find(item => item.id == id);
}

  //CREA ITEM TEMPORAL EN DONDE COLOCARA NUEVOS ESTADOS
  alElegirItem(idItem: string) {
  this.itemAveriado = this.inventario.find(item => item.id == idItem);
}

  reportarAveria() {
    this.itemAveriado.estado = "Dañado";
    this.servicioInventario.editarItem(this.itemAveriado);
    //SE BORRAN LOS CAMPOS DEL FORMULARIO
    this.form.reset();
  }
  reportarReparado() {
    this.itemAveriado.estado = "Disponible";
    this.servicioInventario.editarItem(this.itemAveriado);
    //SE BORRAN LOS CAMPOS DEL FORMULARIO
    this.form.reset();
  }

  //BORRA FORMMULARIO DE AVERIA
  borrarForm() {
    this.form.reset();
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
