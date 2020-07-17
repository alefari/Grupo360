import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-reingreso',
  templateUrl: './reingreso.component.html',
  styleUrls: ['./reingreso.component.css']
})
export class ReingresoComponent implements OnInit {
  inventario: Item[];
  selectTipo: string;
  idItemElegido: string = null;
  cantidadIngreso: number = 0;

  constructor(private servicioInventario: InventarioService) { }



  ngOnInit(): void {
    this.servicioInventario.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
  }

  buscarIndex(itemElegido: string) {
    this.inventario.findIndex(function(item, index) {
      if(item.id == itemElegido){
        return true;
      }
    })
  }

  agregarItems() {
    let nuevoItem = this.inventario[this.inventario.findIndex(item => item.id == this.idItemElegido)];
    nuevoItem.cantidad += this.cantidadIngreso;
    this.servicioInventario.editarItem(nuevoItem);
  }






}
