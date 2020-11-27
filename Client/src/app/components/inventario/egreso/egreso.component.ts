import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { NgForm, Validators } from '@angular/forms';
import { Egreso } from 'src/app/models/egreso.model';

//ICONOS FONTAWESOME
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

//SERVICIOS DE BD
import { CategoriasService } from 'src/app/services/categorias.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { UnidadesService } from 'src/app/services/unidades.service';
import { InventarioSQLService } from 'src/app/services/inventario-sql.service';
import { EstadosService } from 'src/app/services/estados.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})


export class EgresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

   //ICONOS FONTAWESOME
  faSignOutAlt = faSignOutAlt;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle;

    // selectTipo: string;
  // idItemElegidoEgreso: string = null;

  //VARIABLES QUE CONTINENE INFO DE BD
  inventario: any = [];
  categorias: any = [];
  unidades: any = [];
  ubicaciones: any = [];
  subcategorias: any = [];
  estados: any = [];

  cantidadEgreso: number = 0;
  valido: boolean = true;

  idsEgreso = [
    {id: '', cantidad: 1, obra: null, responsable: null}
  ];

  constructor(private servicioCategorias: CategoriasService,
              private servicioSubcategorias: SubcategoriasService,
              private servicioUbicaciones: UbicacionesService,
              private servicioUnidades: UnidadesService,
              private servicioInventario: InventarioSQLService,
              private servicioEstados: EstadosService){ }

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
//BUSCA ITEM A EGRESAR LUEGO DE HABER SELECCINADO
regresarIndice(indice: number) {
  return this.inventario.findIndex(item => item.id == this.idsEgreso[indice].id);
}

egresarItems() {

//CICLO for QUE EGRESA ITEMS MULTIPLES
for(let itemCiclo of this.idsEgreso) {
  let itemEgreso = Object.assign({},this.inventario.find(itemInv => itemInv.id == itemCiclo.id));

  itemEgreso.cantidad = itemEgreso.cantidad - itemCiclo.cantidad;
  itemEgreso.cantidadObra = itemEgreso.cantidadObra + itemCiclo.cantidad

  itemEgreso.categoria = this.categorias.find(cat => cat.nombre == itemEgreso.categoria).id;
  itemEgreso.subcategoria = this.subcategorias.find(subcat => subcat.nombre == itemEgreso.subcategoria).id;
  itemEgreso.ubicacion = this.ubicaciones.find(ubic => ubic.nombre == itemEgreso.ubicacion).id;
  itemEgreso.unidades = this.unidades.find(und => und.nombre == itemEgreso.unidades).id;
  itemEgreso.estado = this.estados.find(est => est.nombre == itemEgreso.estado).id;

  //CAMPOS FALTANTES EN EGRESO
  //itemEgreso.responsable = itemCiclo.responsable;
  //itemEgreso.obra = itemCiclo.obra;

  //COMUNICACION CON SERVICIO (UPDATE)
  this.servicioInventario.updateItem(itemEgreso.id, itemEgreso, true).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    }
  );

  //let egreso: Egreso = {
    //idItem: itemEgreso.id,
    //nombreItem: itemEgreso.nombre,
    //categoriaItem: itemEgreso.tipo,
    //unidades: itemEgreso.unidades,
    //fecha: new Date().toISOString(),
    //obra: itemCiclo.obra,
    //reponsable: itemCiclo.responsable,
  //}
  //if(itemEgreso.tipo != 'Herramienta'){
    //egreso.cantidad = itemCiclo.cantidad;
    // CUANDO ES HERRAMIENTA, SE COLOCA "1 UNIDAD" DE DEFAULT
  //} else {
    //egreso.cantidad = 1;
  //}

  // this.servicioEgresos.agregarEgreso(egreso);
}
  this.form.reset();

  this.idsEgreso = [
    {id: "", cantidad: 1, responsable: null, obra: null}
  ];
}

  //FUNCION PARA BORRAR FORMULARIO
  borrarForm() {
    this.form.reset();
    this.idsEgreso = [{id: '', cantidad: null, obra: null, responsable: null}]
  }

  //FUNCIONES DE EGRESO MULTIPLE
  agregarItem() {
    this.idsEgreso.push({id: '', cantidad: null, obra: null, responsable: null});
  }
  restarItem() {
    this.idsEgreso.pop();
  }

  //FUNCIUON QUE REVISA CANTIDAD VALIDA
  revisarCantidad(cantActual: number) {
    for(let item of this.idsEgreso) {
      if(item.cantidad > cantActual || item.cantidad == null || item.cantidad <= 0){
        this.valido = false;
        return;
      }
    }
    this.valido = true;
  }


  borrarId(indice: number) {
    this.idsEgreso[indice].id = '';
  }


}
