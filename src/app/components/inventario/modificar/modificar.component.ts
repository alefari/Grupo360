//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UnidadesService } from 'src/app/services/unidades.service'
import { UbicacionesService } from 'src/app/services/ubicaciones.service'
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { NgForm, Form } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  inventario: Item[];
  categorias: Categoria[];
  ubicaciones: any[];
  unidades: any[];
  idItemElegidoModificar: string = null;

  //VARIABLES DE DATOS A MODIFICAR
  nombreNuevo: string = null;
  cantidadNuevo: number = 0;
  unidadesNuevo: string = null;
  tipoNuevo: string = null;
  serialNuevo: string = null;
  ubicacionNuevo: string = null;
  vencimientoNuevo:string =null;
  estadoNuevo:string = null;
  precioNuevo:string =null;

  

  constructor(private servicioInventario: InventarioService,
              private categoriaService: CategoriasService,
              private ubicacionesService: UbicacionesService,
              private unidadesService: UnidadesService) { }

  ngOnInit(): void {

    this.categoriaService.obtenerCategorias().subscribe(items => {
      this.categorias = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.servicioInventario.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.ubicacionesService.obtenerUbicaciones().subscribe(items => {
      this.ubicaciones = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.unidadesService.obtenerUnidades().subscribe(items => {
      this.unidades = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
  }

  //ENCUENTRA EL ID DEL ITEM A MODIFICAR
  regresarIndice() {
    return this.inventario.findIndex(item => item.id == this.idItemElegidoModificar);
}

}
