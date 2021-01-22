import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { EgresosService } from '../../../services/egresos.service'
import { CategoriasService } from '../../../services/categorias.service'
import { EliminadosService } from 'src/app/services/eliminados.service';

import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: any = [];
  categorias: any = [];
  oculto = true;
  fechaDesde: Date;
  fechaHasta: string;
  listaEliminados: any =[];

  faFileDownload = faFileDownload;
  faTimesCircle = faTimesCircle; 

  constructor(private servicioEgresos: EgresosService,
              private servicioCategorias: CategoriasService,
              private servicioEliminados: EliminadosService) { }

  ngOnInit(): void {
    // DESCARGA DE INFORMACION DE BD, E INYECCION EN VARIABLES LOCALES
    this.servicioEgresos.getEgresos().subscribe(
      res => {this.egresos = res;},
      err => console.log(err));

    this.servicioCategorias.getCategorias().subscribe(
      res => {this.categorias = res;},
      err => console.log(err));

    this.servicioEliminados.getEliminados().subscribe(
      res => {this.listaEliminados = res;},
      err => console.log(err));
  }

    //SE DESCARGA EL PDF DE EGRESOS
    descargarPDF() {
      const opciones = {
        margin: 1,
        filename: 'Egresos.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {},
        jsPDF: {unit: 'cm', format: 'letter', orientation: 'portrait'}
      };

      const contenido: Element = document.getElementById('elemento-a-exportar');

      html2pdf()
        .from(contenido)
        .set(opciones)
        .save();
    }


}
