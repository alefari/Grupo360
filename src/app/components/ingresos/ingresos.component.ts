import { Component, OnInit } from '@angular/core';
import { IngresosService } from 'src/app/services/ingresos.service';
import { Ingreso } from 'src/app/models/ingreso.model';
import { InventarioService } from 'src/app/services/inventario.service';
import { Item } from 'src/app/models/item.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria.model';
import * as html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingreso[];
  inventario: Item[];
  categorias: Categoria[];
  oculto = true;

  constructor(private ingresosService: IngresosService,
              private inventarioService: InventarioService,
              private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.ingresosService.obtenerIngresos().subscribe(items => {
      this.ingresos = items.sort((a, b) => (a.fecha < b.fecha) ? 1 : ((a.fecha > b.fecha) ? -1 : 0));
    })
    this.inventarioService.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.categoriaService.obtenerCategorias().subscribe(items => {
      this.categorias = items.sort((a, b) => (a.nombre> b.nombre) ? 1: -1)
    })
  }

  regresarIndice(idItem) {
    return this.inventario.findIndex(item => item.id == idItem);
}

  //BUSQUEDA NOMBRE DE FILTRO POR NOMBRE EN TABLA DE INGRESOS
  regresarNombre(id: string) {
    return this.inventario.find(item => item.id == id).nombre;
  }

//BUSQUEDA CATEGORIA DE FILTRO POR CATEGORIA EN TABLA DE INGRESOS
  regresarCategoria(id: string) {
    return this.inventario.find(item => item.id == id).tipo;
  }

  descargarPDF() {
    this.oculto = false;
    const opciones = {
      margin: 1,
      filename: 'Ingresos.pdf',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {},
      jsPDF: {unit: 'cm', format: 'letter', orientation: 'portrait'}
    };

    const contenido: Element = document.getElementById('elemento-a-exportar');

    html2pdf()
      .from(contenido)
      .set(opciones)
      .save();

      this.oculto = true;
  }
}
