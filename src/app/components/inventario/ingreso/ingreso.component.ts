//Imports de servicios, tipos, etc//

import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

//View Child del form de ingreso, y funcion inventarioService//

export class IngresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  categorias: Categoria[];
  ubicaciones: any[];
  unidades: any[];

  //VARIABLES USADAS PARA REINICIALIZAR CAMPOS
  nombre: string = "";

  constructor(private inventarioService: InventarioService,
              private categoriaService: CategoriasService,
              private ubicacionesService: UbicacionesService,
              private unidadesService: UnidadesService) { }

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe(items => {
      this.categorias = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.ubicacionesService.obtenerUbicaciones().subscribe(items => {
      this.ubicaciones = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.unidadesService.obtenerUnidades().subscribe(items => {
      this.unidades = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
  }

//Se declara la variable nuevoItem, que almacena las propiedades del item a ingresar. Esta luego se conecta con el servicio. Se agrega la informacion ingresada//

  onSubmit() {
    let nuevoItem: Item = {
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      serial: this.form.value.serial,
      cantidad: this.form.value.cantidad,
      unidades: this.form.value.unidades,
      precio: this.form.value.precio,
      ubicacion: this.form.value.ubicacion,
      vencimiento: this.form.value.vencimiento,
      estado: "Disponible"
    }

//Se agrega nuevoItem al inventario existente//

    this.inventarioService.agregarItem(nuevoItem);

    this.reinicializarCampos();

  }

  reinicializarCampos() {
    //El formulario se vacia nuevamente
    this.nombre = "";

  }

  cerrarModal() {
    this.reinicializarCampos();
  }

}
