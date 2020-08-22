import { Component, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso.model';
import { Item } from 'src/app/models/item.model';
import { EgresosService } from 'src/app/services/egresos.service';
import { InventarioService } from 'src/app/services/inventario.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';


@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[];
  inventario: Item[];
  categorias: Categoria[];


  constructor(private egresosService: EgresosService,
              private inventarioService: InventarioService,
              private categoriaService: CategoriasService) { }

  ngOnInit(): void {

    this.egresosService.obtenerEgresos().subscribe(items => {
    this.egresos = items.sort((a, b) => (a.fecha < b.fecha) ? 1 : ((a.fecha > b.fecha) ? -1 : 0));
  })
  this.inventarioService.obtenerInventario().subscribe(items => {
    this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  })
  this.categoriaService.obtenerCategorias().subscribe(items => {
    this.categorias = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  })
  }

  regresarIndice(idItem: string) {
      return this.inventario.findIndex(item => item.id == idItem);

}

//FUNCIONES DE FILTRO DE TABLA DE EGRESOS

    //BUSQUEDA NOMBRE DE FILTRO POR NOMBRE EN TABLA DE INGRESOS
    regresarNombre(id: string) {
      var itemNombre = this.inventario.find(item => item.id == id);
      console.log(itemNombre);
      return itemNombre.nombre;
    }

    //BUSQUEDA CATEGORIA DE FILTRO POR CATEGORIA EN TABLA DE INGRESOS
    regresarCategoria(id: string) {
      return this.inventario.find(item => item.id == id).tipo;
    }



}
