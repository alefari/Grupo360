//Imports de servicios, items, etc.//
import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { NgForm, Form } from '@angular/forms';
import { Ingreso } from 'src/app/models/ingreso.model';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from 'src/app/services/categorias.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { EstadosService } from 'src/app/services/estados.service';
import { InventarioComponent } from '../inventario.component';
import { InventarioSQLService } from 'src/app/services/inventario-sql.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';

@Component({
  selector: 'app-reingreso',
  templateUrl: './reingreso.component.html',
  styleUrls: ['./reingreso.component.css']
})

//Se declaran las variables a utilizar en reingreso
export class ReingresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

  inventario: any = [];
  categorias: any = [];
  unidades: any = [];
  estados: any = [];
  ubicaciones: any = [];
  subcategorias: any = [];
  // selectTipo: string;
  cantidadIngreso: number = 0;
  valido: boolean = true;

  idsReingreso = [
    {id: "", cantidad: 1}
  ];

  constructor(private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUnidades: UnidadesService,
              private servicioEstados: EstadosService,
              private servicioInventario: InventarioSQLService,
              private servicioUbicaciones: UbicacionesService) { }


//Se obtiene inventario en orden alfabetico, y se imprime en la tabla//
  ngOnInit(): void {
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
    this.servicioInventario.getInventario().subscribe(
      res => {
        this.inventario = res;
      },
      err => console.log(err)
    );
    this.servicioUnidades.getUnidades().subscribe(
      res => {
        this.unidades = res;
      },
      err => console.log(err)
    );
    this.servicioUbicaciones.getUbicaciones().subscribe(
      res => {
        this.ubicaciones = res;
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

  regresarIndice(indice: number) {
    return this.inventario.findIndex(item => item.id == this.idsReingreso[indice].id);
  }

   //Con el id del item ubicado, se suma la cantidad a agregar ingresada por el usuario en el item del id que haga match//
  reingresarItems() {
    for(let item of this.idsReingreso) {
      let nuevoItem = Object.assign({},this.inventario.find(itemInv => itemInv.id == item.id));

      if(item.cantidad == nuevoItem.cantidadObra) {
        nuevoItem.estado = "Disponible";
        nuevoItem.cantidadObra = 0;
      }
      else if(item.cantidad < nuevoItem.cantidadObra){
        nuevoItem.estado = "En Obra";
        nuevoItem.cantidadObra -= item.cantidad;
      }

      nuevoItem.cantidad += item.cantidad;

      nuevoItem.categoria = this.categorias.find(cat => cat.nombre == nuevoItem.categoria).id;
      nuevoItem.subcategoria = this.subcategorias.find(subcat => subcat.nombre == nuevoItem.subcategoria).id;
      nuevoItem.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == nuevoItem.ubicacion).id;
      nuevoItem.unidades = this.unidades.find(und => und.nombre == nuevoItem.unidades).id;
      nuevoItem.estado = this.estados.find(est => est.nombre == nuevoItem.estado).id;

      this.servicioInventario.updateItem(nuevoItem.id, nuevoItem, true).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

      // this.ingresosService.agregarIngreso(
      //   {
      //     idItem: nuevoItem.id,
      //     nombreItem: nuevoItem.nombre,
      //     categoriaItem: nuevoItem.tipo,
      //     unidades: nuevoItem.unidades,
      //     fecha: new Date().toISOString(),
      //     cantidad: nuevoItem.cantidad,
      //     modalidad: "Reingreso",
      //     precio: null
      //   }
      // )
    }
    this.form.reset();
    this.idsReingreso = [{id: "", cantidad: 1}];
  }



  borrarForm() {
    this.form.reset();
    this.idsReingreso = [{id: "", cantidad: 1}];
  }

  agregarItem() {
    this.idsReingreso.push({id: "", cantidad: 1});
  }

  restarItem() {
    this.idsReingreso.pop();
  }

  revisarCantidad() {
    for(let item of this.idsReingreso){
      if(item.cantidad <= 0) {
        this.valido = false;
        return
      }
    }
    this.valido = true;
  }

  restaurarValor(i: number) {
    this.idsReingreso[i].cantidad = 1;
    this.revisarCantidad();
  }

}

