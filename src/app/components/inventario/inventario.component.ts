import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {

  variable1: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  items: Item[] = [
    {id: '1234', nombre: 'Martillo', tipo: 'Herramienta', cantidad: 3},
    {id: '3435', nombre: 'Taladro', tipo: 'Herramienta', cantidad: 2},
    {id: '787', nombre: 'Cable', tipo: 'Consumible', cantidad: 200}
  ]

}
