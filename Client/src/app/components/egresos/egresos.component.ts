import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Eliminacion } from 'src/app/models/eliminacion.model';
import * as html2pdf from 'html2pdf.js';
import { EgresosService } from '../../services/egresos.service'
import { CategoriasService } from '../../services/categorias.service'

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

  constructor(private servicioEgresos: EgresosService,
              private servicioCategorias: CategoriasService) { }

  ngOnInit(): void {
    this.servicioEgresos.getEgresos().subscribe(
      res => {
        this.egresos = res;
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

//FUNCIONES DE FILTRO DE TABLA DE EGRESOS

    //BUSQUEDA NOMBRE DE FILTRO POR NOMBRE EN TABLA DE INGRESOS
    //regresarNombre(id: string) {
    //  var itemNombre = this.inventario.find(item => item.id == id);
    //  console.log(itemNombre);
    //  return itemNombre.nombre;
    // }

    //BUSQUEDA CATEGORIA DE FILTRO POR CATEGORIA EN TABLA DE INGRESOS
    //regresarCategoria(id: string) {
    // return this.inventario.find(item => item.id == id).tipo;
    //}

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
