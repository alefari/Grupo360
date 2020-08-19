// Imports de servicios, tipos, etc
import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import * as firebase from 'firebase';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { IngresosService } from 'src/app/services/ingresos.service';
import { ObjectUnsubscribedError } from 'rxjs';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

// ViewChild del form de ingreso, y funcion inventarioService

export class IngresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle; 
  faPlusCircle = faPlusCircle;


  categorias: Categoria[];
  ubicaciones: any[];
  unidades: any[];
  inventario: Item[];
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
      estado: "Disponible"
    }
  ];

  constructor(private inventarioService: InventarioService,
              private categoriaService: CategoriasService,
              private ubicacionesService: UbicacionesService,
              private unidadesService: UnidadesService,
              private ingresosService: IngresosService) { }

  ngOnInit(): void {
    this.inventarioService.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
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
    for(var item of this.nuevosItems) {
      var idAUsar = this.generarId().toString();

      // REVISA SI EL ID ESTA DISPONIBLE Y DE NO ESTARLO LO CAMBIA
      while(!this.revisarDisponibilidad(idAUsar)){
        idAUsar = this.generarId().toString();
      }

      item.id = idAUsar;

      if(item.tipo == "Herramienta") {
        item.cantidad = 1;
        item.unidades = "Unidad";
      }

      this.inventarioService.agregarItem(item);

      this.ingresosService.agregarIngreso(
        {
          idItem: item.id,
          fecha: new Date().toISOString(),
          cantidad: item.cantidad,
          precio: item.precio,
          modalidad: "Ingreso"
        }
      )
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
        estado: "Disponible"
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
        estado: "Disponible"
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
        estado: "Disponible"
      }
    )
    // this.cantidadItems++;
  }

  restarItem() {
    this.nuevosItems.pop()
    // this.cantidadItems--;
  }

  generarId() {
    return (Math.random() * 1000000000 + 1);
  }

  // RERTORNA TRUE SI EL ID ESTA DISPONIBLE, SI NO RETORNA FALSE
  revisarDisponibilidad(id: string) {
    for(var objeto of this.inventario) {
      if(objeto.id == id) {
        return false;
      }
    }
    return true;
  }

}
