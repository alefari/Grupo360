//Imports de servicios, items, etc.//

import { Component, OnInit, ViewChild, NgModuleDecorator } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { NgForm, Form } from '@angular/forms';

// IMPORTS DE BD
import { InventarioSQLService } from '../../../services/inventario-sql.service';
import { CategoriasService } from '../../../services/categorias.service';
import { UbicacionesService } from '../../../services/ubicaciones.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { EstadosService } from 'src/app/services/estados.service';

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faPencilAlt = faPencilAlt;
  faTimesCircle = faTimesCircle;

  //VARIABLES QUE CONTIENEN BASES DE DATOS
  inventarioSQL: any = [];
  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any = [];
  unidades: any = [];
  estados: any = [];

  itemElegido: Item = {
    id: null,
    nombre: null,
    tipo: null,
    cantidad: null,
    ubicacion: null,
    fecha: null,
    responsable: null,
    estado: null,
    vencimiento: null,
    serial: null,
    precio: null,
    unidades: null
  };

  constructor(private servicioInventarioSQL: InventarioSQLService,
    private servicioCategorias: CategoriasService,
    private servicioSubcategorias: SubcategoriasService,
    private servicioUbicaciones: UbicacionesService,
    private servicioUnidades: UnidadesService,
    private servicioEstados: EstadosService) { }

  ngOnInit(): void {
    this.servicioInventarioSQL.getInventario().subscribe(
      res => {
        this.inventarioSQL = res;
      },
      err => console.log(err)
    );
    this.servicioCategorias.getCategorias().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    );
    this.servicioSubcategorias.getSubcategorias().subscribe(
      res => {
        this.subcategorias = res;
      },
      err => console.log(err)
    );
    this.servicioUbicaciones.getUbicaciones().subscribe(
      res => {
        this.ubicaciones = res;
      },
      err => console.log(err)
    );
    this.servicioUnidades.getUnidades().subscribe(
      res => {
        this.unidades = res;
      },
      err => console.log(err)
    );
    this.servicioEstados.getEstados().subscribe(
      res => {
        this.estados = res;
      },
      err => console.log(err)
    );
  }

    //ENCUENTRA EL ID DEL ITEM A MODIFICAR
  alElegirItem(idItem: string) {
    this.itemElegido = this.inventarioSQL.find(item => item.id == idItem);
  }

  onModificar() {

    let nuevoItem = {
      nombre: this.itemElegido.nombre,
      id_categoria: +this.itemElegido.categoria,
      id_subcategoria: +this.itemElegido.subcategoria,
      cantidad: this.itemElegido.cantidad,
      id_unidad: +this.itemElegido.unidades,
      id_ubicacion: +this.itemElegido.ubicacion,
      id_estado: +this.itemElegido.estado,
      vencimiento: this.itemElegido.vencimiento,
      serial: this.itemElegido.serial,
      precio: +this.itemElegido.precio,
      descripcion: this.itemElegido.descripcion,
    }

    this.servicioInventarioSQL.updateItem(this.itemElegido.id, nuevoItem).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.form.reset();
  }
}
