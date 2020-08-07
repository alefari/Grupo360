//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild, NgModuleDecorator } from '@angular/core';
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
  @ViewChild('f') form: NgForm;

  categorias: Categoria[];
  ubicaciones: any[];
  unidades: any[];
  inventario: Item[];
  idItemElegidoModificar: string = null;

  itemElegido: Item = {
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

  alElegirItem(idItem: string) {
    this.itemElegido = this.inventario.find(item => item.id == idItem);
  }

  //ENCUENTRA EL ID DEL ITEM A MODIFICAR
  regresarIndice() {
    return this.inventario.findIndex(item => item.id == this.idItemElegidoModificar);
  }

  onModificar() {
    this.servicioInventario.editarItem(this.itemElegido);
    this.form.reset();
  }

}
