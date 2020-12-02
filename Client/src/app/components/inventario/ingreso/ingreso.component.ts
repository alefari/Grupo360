// Imports de servicios, tipos, etc
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { ObjectUnsubscribedError } from 'rxjs';

//ICONOS FONTAWESOME
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from 'src/app/services/categorias.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { InventarioSQLService } from 'src/app/services/inventario-sql.service';
import { IngresosService } from 'src/app/services/ingresos.service';
import { any } from 'sequelize/types/lib/operators';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

// ViewChild del form de ingreso, y funcion inventarioService

export class IngresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  itemExistenteVar: boolean[] = [];
  //ICONOS FONTAWESOME
  faSignInAlt = faSignInAlt;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

  respuesta: any;
  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any = [];
  unidades: any = [];
  inventario: any = [];
  nombre = "";
  valido: boolean = true;
  // cantidadItems = 1;

  nuevosItems: any[] = [
    {
      id: null,
      nombre: null,
      tipo: null,
      cantidad: null,
      ubicacion: null,
      vencimiento: null,
      serial: null,
      precio: null,
      unidades: null,
      estado: "Disponible"
    }
  ];
  idItem: any;

  constructor(private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUbicaciones: UbicacionesService,
              private servicioUnidades: UnidadesService,
              private inventarioService: InventarioSQLService,
              private ingresosService: IngresosService) { }

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe(
      res => { this.categorias = res; },
      err => console.log(err)
    );
    this.servicioSubcategorias.getSubcategorias().subscribe(
      res => { this.subcategorias = res; },
      err => console.log(err)
    );
    this.servicioUbicaciones.getUbicaciones().subscribe(
      res => this.ubicaciones = res,
      err => console.log(err)
    );
    this.servicioUnidades.getUnidades().subscribe(
      res => { this.unidades = res; },
      err => console.log(err)
    );
    this.obtenerInventario();
  }

  obtenerInventario() {
    this.inventarioService.getInventario().subscribe(
      res => {
        this.inventario = res;
      },
      err => console.log(err)
    );
  }

  onSubmit() {

    let indice: number = 0;
    for(var item of this.nuevosItems) {

      if(!this.itemExistenteVar[indice]) {
        console.log(item);

        this.inventarioService.createItem(item).subscribe(
          res => {
            console.log(item);

            // console.log(res["text"]);
            // this.registrarIngreso(res["id"], item, 1);
          },
          err => { console.log(err); }
        );
      }

      else if (this.itemExistenteVar[indice]) {
        let itemOriginal = this.inventario.find(itemInventario => itemInventario.id == item.id);

        let itemModificar = {
          cantidad: itemOriginal.cantidad + item.cantidad,
          precio: itemOriginal.precio + item.precio,
          descripcion: this.nuevosItems[indice].descripcion
        };
        console.log(item.id, {cantidad: item.cantidad, precio: item.precio});
        this.inventarioService.updateItem(itemOriginal.id, itemModificar, false).subscribe(
          res => {
            console.log(item);
            // console.log(res);
            
            // this.registrarIngreso(item.id, {cantidad: item.cantidad, precio: item.precio}, 3);
          },
          err => { console.log(err); }
        );
      }
      indice++;
    }
    this.cerrarModal();
    }

    registrarIngreso(id: any, item: any, modalidad: number) {
      let ingreso = {
        id_item_ingresado: +id,
        id_modalidad: +modalidad,
        cantidad: +item.cantidad,
        cedula_responsable_ingreso: 10470050,
        precio: +item.precio
      }
      this.ingresosService.createIngreso(ingreso).subscribe(
        res => { console.log(res); },
        err => { console.log(err); }
      );
    }



  //Al cerrar el modal, se reinician los campos
  cerrarModal() {
    // this.form.reset();
    this.nuevosItems = [
      {
        nombre: null,
        tipo: null,
        cantidad: null,
        ubicacion: null,
        vencimiento: null,
        serial: null,
        precio: null,
        unidades: null,
        estado: "Disponible"
      }
    ]
  }

  repetirNVeces(n: number) {
    return[...Array(+n).keys()];
  }

  agregarItem() {
    this.nuevosItems.push(
      {
        nombre: null,
        tipo: null,
        cantidad: null,
        ubicacion: null,
        vencimiento: null,
        serial: null,
        precio: null,
        unidades: null,
        estado: "Disponible"
      }
    )
  }

  restarItem() {
    this.nuevosItems.pop()
  }

  revisarCantidad() {
    for(let item of this.nuevosItems){
      if(item.cantidad <= 0) {
        this.valido = false;
        return
      }
    }
    this.valido = true;
  }

  regresarItem(id: any) {
    return this.inventario.find(itemInv => itemInv.id == id);
  }

  actDescripcion(valor: any, index: number) {
    this.nuevosItems[index].descripcion = valor.target.value;
  }

}
