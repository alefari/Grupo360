import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let nuevoItem: Item = {
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      cantidad: this.form.value.cantidad
    }

    this.inventarioService.agregarItem(nuevoItem);

    this.form.value.nombre = "";
    this.form.value.tipo = "";
    this.form.value.cantidad = 0;

  }

}
