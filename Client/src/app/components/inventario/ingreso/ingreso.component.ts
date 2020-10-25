// Imports de servicios, tipos, etc
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import * as firebase from 'firebase';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { ObjectUnsubscribedError } from 'rxjs';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from 'src/app/services/categorias.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

// ViewChild del form de ingreso, y funcion inventarioService

export class IngresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  itemExistenteVar: boolean[] = [];
  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any[];
  unidades: any[];
  inventario: Item[];
  nombre = "";
  valido: boolean = true;
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

  constructor(private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService) { }

  ngOnInit(): void {
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
  }

  onSubmit() {
//Se agrega nuevoItem al inventario existente, y se borran los campos//
    let indice: number = 0;
    for(var item of this.nuevosItems) {

      if(!this.itemExistenteVar[indice]) {
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
        item.fecha = new Date().toISOString();
        //this.inventarioService.agregarItem(item);
        // this.ingresosService.agregarIngreso(
        //   {
        //     idItem: item.id,
        //     nombreItem: item.nombre,
        //     categoriaItem: item.tipo,
        //     unidades: item.unidades,
        //     fecha: new Date().toISOString(),
        //     cantidad: item.cantidad,
        //     precio: item.precio,
        //     modalidad: "Nuevo"
        //   }
        // )
      }
      else if (this.itemExistenteVar[indice]) {
        let itemModificar = this.inventario.find(itemInventario => itemInventario.id == item.nombre);
        itemModificar.cantidad += item.cantidad;
        itemModificar.precio += item.precio;
        //this.inventarioService.editarItem(itemModificar);
        // this.ingresosService.agregarIngreso(
        //   {
        //     idItem: itemModificar.id,
        //     nombreItem: itemModificar.nombre,
        //     categoriaItem: itemModificar.tipo,
        //     unidades: itemModificar.unidades,
        //     fecha: new Date().toISOString(),
        //     cantidad: item.cantidad,
        //     precio: item.precio,
        //     modalidad: "Existente"
        //   }
        // )
      }

      indice++;
    }

    this.cerrarModal();

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

  revisarCantidad() {
    for(let item of this.nuevosItems){
      if(item.cantidad <= 0) {
        this.valido = false;
        return
      }
    }
    this.valido = true;
  }

  restablecerCantidad(indice: number) {
    if(this.nuevosItems[indice].tipo == "Herramienta") {
      this.nuevosItems[indice].cantidad = 1;
    }

    this.revisarCantidad();
  }

  regresarItem(id: string) {
    return this.inventario.find(itemInv => itemInv.id == id);
  }

}
