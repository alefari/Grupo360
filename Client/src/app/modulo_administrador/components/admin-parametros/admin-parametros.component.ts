import { Component, OnInit, ViewChild, NgModuleDecorator } from '@angular/core';
import { Item } from 'src/app/modulo_inventario/inventario-models/item.model';
import { NgForm, Form } from '@angular/forms';
import { Router } from '@angular/router';

// IMPORTS DE BD
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { EstadosService } from 'src/app/services/estados.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { InventarioSQLService } from 'src/app/services/inventario-sql.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';

//ICONOS FONTAWESOME
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { AreasService } from 'src/app/services/areas.service';


@Component({
  selector: 'app-admin-parametros',
  templateUrl: './admin-parametros.component.html',
  styleUrls: ['./admin-parametros.component.css']
})
export class AdminParametrosComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faTimesCircle = faTimesCircle;
  faPlusCircle = faPlusCircle;
  faExclamationCircle = faExclamationCircle;

  //VARIABLES QUE CONTIENEN BASES DE DATOS
  inventarioSQL: any = [];
  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any = [];
  unidades: any = [];
  estados: any = [];
  areas: any = [];

  constructor(private servicioInventarioSQL: InventarioSQLService,
              private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUbicaciones: UbicacionesService,
              private servicioUnidades: UnidadesService,
              private servicioEstados: EstadosService,
              private servicioArea: AreasService,
              private router: Router) { }

  ngOnInit(): void {
    this.servicioInventarioSQL.getInventario().subscribe(
      res => {this.inventarioSQL = res;},
      err => console.log(err));

    this.servicioCategorias.getCategorias().subscribe(
      res => {this.categorias = res;},
      err => console.log(err));

    this.servicioSubcategorias.getSubcategorias().subscribe(
      res => {this.subcategorias = res;},
      err => console.log(err));

    this.servicioUbicaciones.getUbicaciones().subscribe(
      res => {this.ubicaciones = res;},
      err => console.log(err));

    this.servicioUnidades.getUnidades().subscribe(
      res => {this.unidades = res;},
      err => console.log(err));

    this.servicioEstados.getEstados().subscribe(
      res => {this.estados = res;},
      err => console.log(err));

    this.servicioArea.getAreas().subscribe(
      res => {this.estados = res;},
      err => console.log(err));
  }

  //FUNCION AGREGAR UNIDAD
  unidadAgregar(nombreUnidad: string){
    let nuevaUnidad: any = {nombre: nombreUnidad};
    this.servicioUnidades.createUnidad(nuevaUnidad).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.form.reset();
  }
  //FUNCION AGREGAR CATEGORIA
  categoriaAgregar(nombreCategoria: string){
    let nuevaCategoria: any = {nombre: nombreCategoria};
    this.servicioCategorias.createCategoria(nuevaCategoria).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.form.reset();
  }
  //FUNCION AGREGAR UBICACION
  ubicacionAgregar(nombreUbicacion: string){
    let nuevaUbicacion: any = {nombre: nombreUbicacion};
    this.servicioUbicaciones.createUbicacion(nuevaUbicacion).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.form.reset();
  }
  //FUNCION AGREGAR SUBCATEGORIA
  subcategoriaAgregar(nombreSubcategoria: string){
    let nuevaSubcategoria: any = {nombre: nombreSubcategoria};
    this.servicioSubcategorias.createSubcategoria(nuevaSubcategoria).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.form.reset();
  }
  //FUNCION AGREGAR AREA
  areaAgregar(nombreArea: string){
    let nuevaArea: any = {nombre: nombreArea};
    this.servicioArea.createAreas(nuevaArea).subscribe(
      res => {console.log(res);},
      err => {console.log(err);}
    );
    this.form.reset();
  }

  //FUNCION PARA BORRAR FORMULARIO AGREGAR
  borrarForm() {
    this.form.reset();
    this.router.navigate(['administrador/gestion-interna']);
  }
}
