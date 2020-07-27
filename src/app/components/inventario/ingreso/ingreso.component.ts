// Imports de servicios, tipos, etc
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

// ViewChild del form de ingreso, y funcion inventarioService

export class IngresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  categorias: Categoria[];
  ubicaciones: any[];
  unidades: any[];
  nombre = "";
  // cantidadItems = 1;

  nuevosItems: Item[] = [
    {
      nombre: null,
      tipo: null,
      cantidad: null,
      ubicacion: null,
      vencimiento: null,
      serial: null,
      precio: null,
      unidades: null,
    }
  ];

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

  onSubmit() {
//Se agrega nuevoItem al inventario existente, y se borran los campos//
    var item: Item;
    for(item of this.nuevosItems) {
      this.inventarioService.agregarItem(item);
    }
    this.form.reset();
    this.nuevosItems =
    // this.cantidadItems = 1;
    this.nuevosItems = [
      {
        nombre: null,
        tipo: null,
        cantidad: null,
        ubicacion: null,
        vencimiento: null,
        serial: null,
        precio: null,
        unidades: null,
      }
    ]
  }

  //Al cerrar el modal, se reinician los campos
  cerrarModal() {
    this.form.reset();
    this.nuevosItems = [
      {
        nombre: null,
        tipo: null,
        cantidad: null,
        ubicacion: null,
        vencimiento: null,
        serial: null,
        precio: null,
        unidades: null,
      }
    ]
  }

  repetirNVeces(n: number) {
    return[...Array(+n).keys()];
  }

  agregarItem() {
    this.nuevosItems.push(
      {
        nombre: null,
        tipo: null,
        cantidad: null,
        ubicacion: null,
        vencimiento: null,
        serial: null,
        precio: null,
        unidades: null,
      }
    )
    // this.cantidadItems++;
  }

  restarItem() {
    this.nuevosItems.pop()
    // this.cantidadItems--;
  }

}
