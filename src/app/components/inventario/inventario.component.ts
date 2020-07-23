//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/item.model';
import { InventarioService } from '../../services/inventario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
//Se declaran variables de filtros//
export class InventarioComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  inventario: Item[];
  filtroNombre: string = "";
  filtroTipo: string = "";

  constructor(private servicioInventario: InventarioService) { }

//Se adjuntan items de base de datos a la variable inventario, y se ordena items en orden alfabetico//
  ngOnInit(): void {
    this.servicioInventario.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
  }

  items: Item[] = [
    {id: '1234', nombre: 'Martillo', tipo: 'Herramienta', cantidad: 3},
    {id: '3435', nombre: 'Taladro', tipo: 'Herramienta', cantidad: 2},
    {id: '787', nombre: 'Cable', tipo: 'Consumible', cantidad: 200}
  ]

  imprimirInventario() {

    console.log(this.inventario);

  }


}
