import { Component, OnInit } from '@angular/core';
import { IngresosService } from 'src/app/services/ingresos.service';
import { Ingreso } from 'src/app/models/ingreso.model';
import { InventarioService } from 'src/app/services/inventario.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingreso[];
  inventario: Item[];

  constructor(private ingresosService: IngresosService, 
              private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.ingresosService.obtenerIngresos().subscribe(items => {
      this.ingresos = items.sort((a, b) => (a.fecha < b.fecha) ? 1 : ((a.fecha > b.fecha) ? -1 : 0));
    })
    this.inventarioService.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
  }

  regresarIndice(idItem) {
    return this.inventario.findIndex(item => item.id == idItem);
}

}
