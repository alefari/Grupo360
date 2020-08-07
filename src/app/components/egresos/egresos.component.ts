import { Component, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso.model';
import { Item } from 'src/app/models/item.model';
import { EgresosService } from 'src/app/services/egresos.service';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[];
  inventario: Item[];


  constructor(private egresosService: EgresosService, 
              private inventarioService: InventarioService) { }

  ngOnInit(): void {    
    
    this.egresosService.obtenerEgresos().subscribe(items => {
    this.egresos = items.sort((a, b) => (a.fecha < b.fecha) ? 1 : ((a.fecha > b.fecha) ? -1 : 0));
  })
  this.inventarioService.obtenerInventario().subscribe(items => {
    this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  })
  }

  regresarIndice(idItem) {
    return this.inventario.findIndex(item => item.id == idItem);
}


}
