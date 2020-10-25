import { Component, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/egreso.model';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Eliminacion } from 'src/app/models/eliminacion.model';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[];
  inventario: Item[];
  categorias: Categoria[];
  eliminados: Eliminacion[];

  constructor() { }

  ngOnInit(): void {


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
