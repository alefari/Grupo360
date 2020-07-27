//Imports de servicios, items, etc.//

import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-reingreso',
  templateUrl: './reingreso.component.html',
  styleUrls: ['./reingreso.component.css']
})

//Se declaran las variables a utilizar en reingreso//
export class ReingresoComponent implements OnInit {
  inventario: Item[];
  categorias: Categoria[];
  // selectTipo: string;
  idItemElegido: string = null;
  cantidadIngreso: number = 0;

  constructor(private servicioInventario: InventarioService,
              private categoriaService: CategoriasService)
              { }


//Se obtiene inventario en orden alfabetico, y se imprime en la tabla//
  ngOnInit(): void {

    this.categoriaService.obtenerCategorias().subscribe(items => {
      this.categorias = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.servicioInventario.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
  }

  //Compara items de acuerdo a la seleccion del usuario en el Filtro de la tabla, y guarda el id del item seleccionado//
  buscarIndex(itemElegido: string) {
    this.inventario.findIndex(function(item, index) {
      if(item.id == itemElegido){
        return true;
      }
    })
  }

   //Con el id del item ubicado, se suma la cantidad a agregar ingresada por el usuario en el item del id que haga match//
  agregarItems() {
    let nuevoItem = this.inventario[this.inventario.findIndex(item => item.id == this.idItemElegido)];
    nuevoItem.cantidad += this.cantidadIngreso;
    this.servicioInventario.editarItem(nuevoItem);
  }

  regresarIndice() {
     return this.inventario.findIndex(item => item.id == this.idItemElegido);
  }

}

