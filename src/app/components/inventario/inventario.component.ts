//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/item.model';
import { InventarioService } from '../../services/inventario.service';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { Categoria } from 'src/app/models/categoria.model';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
//Se declaran variables de filtros//
export class InventarioComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  inventario: Item[];
  categorias: Categoria[];
  ubicaciones: any[];

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

  filtroTipo: string = "";
  faSearch = faSearch;

  constructor(private servicioInventario: InventarioService,
              private servicioCategorias: CategoriasService,
              private servicioUbicaciones: UbicacionesService) { }

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

  asignarDetalles(item: Item) {
    this.datosInfo = item;
  }

  reportarAveria(itemAveriado: Item) {
    itemAveriado.estado = "Dañado";
    this.servicioInventario.editarItem(itemAveriado);
  }

}
