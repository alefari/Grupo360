import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/ingreso.model';
import { Item } from 'src/app/models/item.model';
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
  fechaDesde: Date;
  fechaHasta: string;

  constructor() {
                this.fechaHasta = this.dateAString(new Date());
              }

  ngOnInit(): void {

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

  dateAString(date: Date) {
    let stringFecha: string = "";
    stringFecha += date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getUTCDate();
    console.log(stringFecha);
    return stringFecha;
  }


}