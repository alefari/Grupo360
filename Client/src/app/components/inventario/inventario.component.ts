//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/item.model';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Categoria } from 'src/app/models/categoria.model';
import * as html2pdf from 'html2pdf.js';

// IMPORTS DE BD
import { InventarioSQLService } from '../../services/inventario-sql.service';
import { CategoriasService } from '../../services/categorias.service';
import { UbicacionesService } from '../../services/ubicaciones.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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

  oculto = true;

  nuevaUnidad : any = {
    nombre:null,
  };

  nuevaCategoria : Categoria = {
    nombre:null,
    codigo:null,
  };

  nuevaUbicacion : any = {
    nombre:null,
  };

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

  //VARIABLE PARA HACER LAS BUSQUEDA POR ID DEL ITEM DE AVERIA
  idItemElegido:string = null;

  filtroTipo: string = "";
  faSearch = faSearch;

  inventarioSQL: any = [];
  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any = [];

  constructor(private servicioInventarioSQL: InventarioSQLService,
              private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUbicaciones: UbicacionesService) { }

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
    /*
    this.servicioInventario.eliminarItem(this.itemBorrar.id);
    var eliminacion: Eliminacion = {
      idItem: this.itemBorrar.id,
      nombreItem: this.itemBorrar.nombre,
      categoriaItem: this.inventario.find(item => item.id == this.itemBorrar.id).tipo,
      unidades: this.inventario.find(item => item.id == this.itemBorrar.id).unidades,
      fecha: new Date().toISOString(),
      cantidad: this.inventario.find(item => item.id == this.itemBorrar.id).cantidad
    }
    this.servicioEliminados.agregarEliminado(eliminacion);*/
  }

  //BUSCA ITEM PARA REPORTAR AVERIA
  regresarIndice() {
    // return this.inventario.findIndex(item => item.id == this.idItemElegido);
}
  regresarItem(id: string) {
    // return this.inventario.find(item => item.id == id);
}

  //CREA ITEM TEMPORAL EN DONDE COLOCARA NUEVOS ESTADOS
  alElegirItem(idItem: string) {
  // this.itemAveriado = this.inventario.find(item => item.id == idItem);
}

  reportarAveria() {
    /* this.itemAveriado.estado = "Dañado";
    this.servicioInventario.editarItem(this.itemAveriado);
    //SE BORRAN LOS CAMPOS DEL FORMULARIO
    this.form.reset();
  }
  reportarReparado() {
    this.itemAveriado.estado = "Disponible";
    this.servicioInventario.editarItem(this.itemAveriado);
    //SE BORRAN LOS CAMPOS DEL FORMULARIO
    this.form.reset();*/
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

  unidadAgregar(){
    /*if (this.nuevaUnidad.nombre!=null && this.nuevaUnidad.nombre!=""){
      this.servicioUnidades.agregarUnidad(this.nuevaUnidad);
    }*/
  }

  categoriaAgregar(){
    /*if (this.nuevaCategoria.nombre!=null && this.nuevaCategoria.nombre!=""){
    this.servicioCategorias.agregarCategoria(this.nuevaCategoria);
    }*/
  }

  ubicacionAgregar(){
    /*if (this.nuevaUbicacion.nombre!=null && this.nuevaUbicacion.nombre!=""){
    this.servicioUbicaciones.agregarUbicacion(this.nuevaUbicacion);
    }*/
  }
}
