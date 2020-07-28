import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';


@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})


export class EgresoComponent implements OnInit {

  inventario: Item[];
  categorias: Categoria[];
  // selectTipo: string;
  idItemElegidoEgreso: string = null;
  cantidadEgreso: number = 0;

  constructor(private servicioInventario: InventarioService,
              private categoriaService: CategoriasService) 
              { }

  ngOnInit(): void {

    this.categoriaService.obtenerCategorias().subscribe(items => {
      this.categorias = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.servicioInventario.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  })
}
//Busca item a egresar por filtro, y guarda el id del mismo
buscarIndex(itemElegidoEgreso: string) {
  this.inventario.findIndex(function(item, index) {
    if(item.id == itemElegidoEgreso){
      return true;
    }
  })
}

   //Con el id del item ubicado, se suma la cantidad a agregar ingresada por el usuario en el item del id que haga match//
egresarItems() {
    let nuevoItem = this.inventario[this.inventario.findIndex(item => item.id == this.idItemElegidoEgreso)];
    nuevoItem.cantidad = nuevoItem.cantidad - this.cantidadEgreso;
    this.servicioInventario.editarItem(nuevoItem);
  }

  regresarIndice() {
    return this.inventario.findIndex(item => item.id == this.idItemElegidoEgreso);
}

}