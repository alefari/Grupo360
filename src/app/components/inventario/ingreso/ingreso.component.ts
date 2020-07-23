//Imports de servicios, tipos, etc//

import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

//View Child del form de ingreso, y funcion inventarioService//

export class IngresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
  }

//Se declara la funcion nuevoItem, que almacena las propiedades del item a ingresar. Esta luego se conecta con el servicio. Se agrega la informacion ingresada//

  onSubmit() {
    let nuevoItem: Item = {
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      cantidad: this.form.value.cantidad
    }

//Se agrega nuevoItem al inventario existente// 

    this.inventarioService.agregarItem(nuevoItem);

//El formulario se vacia nuevamente// 

    this.form.value.nombre = "";
    this.form.value.tipo = "";
    this.form.value.cantidad = 0;

  }

}
