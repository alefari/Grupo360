import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { IngresosService } from 'src/app/services/ingresos.service';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: any = [];
  categorias: any = [];
  oculto = true;
  fechaDesde: Date;
  fechaHasta: string;

  constructor(private servicioIngresos: IngresosService,
              private servicioCategorias: CategoriasService) {

                this.fechaHasta = this.dateAString(new Date());
              }

  ngOnInit(): void {
    this.servicioIngresos.getIngresos().subscribe(
      res => {
        this.ingresos = res;
      },
      err => console.log(err)
    );
    this.servicioCategorias.getCategorias().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    );
  }

  //BUSQUEDA NOMBRE DE FILTRO POR NOMBRE EN TABLA DE INGRESOS
  // regresarNombre(id: string) {
  //   return this.inventario.find(item => item.id == id).nombre;
  // }

//BUSQUEDA CATEGORIA DE FILTRO POR CATEGORIA EN TABLA DE INGRESOS
  // regresarCategoria(id: string) {
  //   return this.inventario.find(item => item.id == id).tipo;
  // }

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
