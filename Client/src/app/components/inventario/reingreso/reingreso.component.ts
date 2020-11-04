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
              private servicioInventario: InventarioSQLService) { }


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
  }

  regresarIndice(indice: number) {
    return this.inventario.findIndex(item => item.id == this.idsReingreso[indice].id);
  }

   //Con el id del item ubicado, se suma la cantidad a agregar ingresada por el usuario en el item del id que haga match//
  reingresarItems() {
    for(let item of this.idsReingreso) {
      let nuevoItem = this.inventario.find(itemInv => itemInv.id == item.id);
      // let nuevoItem = this.inventario[this.inventario.findIndex(itemInv => itemInv.id == item.id)];
      if(nuevoItem.tipo != "Herramienta") {
        nuevoItem.cantidad += item.cantidad;
      }
      nuevoItem.estado = "Disponible"
      //this.servicioInventario.editarItem(nuevoItem);

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

