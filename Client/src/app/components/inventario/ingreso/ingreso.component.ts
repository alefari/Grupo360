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

  categorias: any = [];
  subcategorias: any = [];
  ubicaciones: any = [];
  unidades: any = [];
  inventario: any = [];
  nombre = "";
  valido: boolean = true;
  // cantidadItems = 1;

  nuevosItems: Item[] = [
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

  constructor(private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUbicaciones: UbicacionesService,
              private servicioUnidades: UnidadesService,
              private inventarioService: InventarioSQLService,
              private ingresosService: IngresosService) { }

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

        this.inventarioService.createItem(item).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log(err);
            }
          )
          let ingreso = {
            id_item_ingresado: item.id,
            cantidad: +item.cantidad,
            fecha: new Date().toISOString().slice(0, 19).replace('T', ' '),
            precio: +item.precio,
            modalidad: 1,
            cedula_responsable_ingreso: 10470050
          };
          console.log(ingreso);
        // this.ingresosService.createIngreso(
        //   //

        // )
      }
      else if (this.itemExistenteVar[indice]) {

        let itemOriginal = this.inventario.find(itemInventario => itemInventario.id == item.id);

        let itemModificar = {
          cantidad: itemOriginal.cantidad + item.cantidad,
          precio: itemOriginal.precio + item.precio,
          descripcion: this.nuevosItems[indice].descripcion
        };

        this.inventarioService.updateItem(itemOriginal.id, itemModificar).subscribe(
          res => {
            console.log(res);
            this.obtenerInventario();
          },
          err => {
            console.log(err);
          }
        );
        this.ingresosService.createIngreso(
          {
            id_item_ingresado: item.id,
            // fecha: new Date().toISOString().slice(0, 19).replace('T', ' '),
            cantidad: +item.cantidad,
            precio: +item.precio,
            modalidad: 1,
            cedula_responsable_ingreso: 10470050
          }
        )
      }

      indice++;
    }

    this.cerrarModal();

    }



  //Al cerrar el modal, se reinician los campos
  cerrarModal() {
    this.form.reset();
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
