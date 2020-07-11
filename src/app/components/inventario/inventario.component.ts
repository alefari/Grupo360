import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { InventarioService } from '../../services/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {

  variable1: boolean = false;
  inventario: Item[];

  constructor(private servicioInventario: InventarioService) { }

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
