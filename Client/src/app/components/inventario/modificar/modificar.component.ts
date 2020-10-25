//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild, NgModuleDecorator } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { NgForm, Form } from '@angular/forms';

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faPencilAlt = faPencilAlt;
  faTimesCircle = faTimesCircle;

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

  constructor() { }

  ngOnInit(): void {


  }

  alElegirItem(idItem: string) {
    this.itemElegido = this.inventario.find(item => item.id == idItem);
  }

  //ENCUENTRA EL ID DEL ITEM A MODIFICAR
  regresarIndice() {
    return this.inventario.findIndex(item => item.id == this.idItemElegidoModificar);
  }

  onModificar() {
    // this.servicioInventario.editarItem(this.itemElegido);
    this.form.reset();
  }

}
