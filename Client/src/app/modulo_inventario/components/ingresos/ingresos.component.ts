import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { IngresosService } from 'src/app/services/ingresos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ModalidadesService } from 'src/app/services/modalidades.service';

import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: any = [];
  categorias: any = [];
  modalidades: any = [];
  oculto = true;
  fechaDesde: Date;
  fechaHasta: Date;

  faFileDownload = faFileDownload;
  faTimesCircle = faTimesCircle;

  constructor(private servicioIngresos: IngresosService,
              private servicioCategorias: CategoriasService,
              private servicioModalidades: ModalidadesService) {
              }

  ngOnInit(): void {
    // DESCARGA DE INFORMACION DE BD, E INYECCION EN VARIABLES LOCALES
    this.servicioIngresos.getIngresos().subscribe(
      res => {this.ingresos = res;},
      err => console.log(err));
    this.servicioCategorias.getCategorias().subscribe(
      res => {this.categorias = res;},
      err => console.log(err));

    this.servicioModalidades.getModalidades().subscribe(
      res => {this.modalidades = res;},
      err => console.log(err));
  }

  //FUNCION DESCARGAR PDF DE INGRESOS
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

    //FUNCIONES DE FILTRO POR FECHA (NO SIRVIERON)
  changeFirstInput(e){
    this.fechaDesde = e.target.value;
    console.log(this.ingresos.filter(o => new Date(o.date) >= this.fechaDesde &&
                                      new Date(o.date) <= this.fechaHasta  ));
  }
  changeSecondInput(e){
    this.fechaHasta = e.target.value;
    console.log(this.ingresos.filter(o => new Date(o.date) >= this.fechaDesde &&
                                      new Date(o.date) <= this.fechaHasta  ));
  } 
}
