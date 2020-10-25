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

  inventario: Item[];
  categorias: Categoria[];
  // selectTipo: string;
  // idItemElegidoEgreso: string = null;
  cantidadEgreso: number = 0;
  valido: boolean = true;

  idsEgreso = [{id: '', cantidad: null, obra: null, responsable: null}];

  constructor(){ }

  ngOnInit(): void {

}
//Busca item a egresar por filtro, y guarda el id del mismo
buscarIndex(itemElegidoEgreso: string) {
  this.inventario.findIndex(function(item, index) {
    if(item.id == itemElegidoEgreso){
      return true;
    }
  })
}

   //Con el id del item ubicado, se suma la cantidad a agregar ingresada por el usuario en el item del id que haga match//
egresarItems() {

  for(let itemCiclo of this.idsEgreso) {
    let itemEgreso = this.inventario[this.inventario.findIndex(item => item.id == itemCiclo.id)];

    if(itemEgreso.tipo == "Herramienta") {
      itemEgreso.estado = "En Obra";
    }
    else {
      itemEgreso.cantidad = itemEgreso.cantidad - itemCiclo.cantidad;
      if(itemEgreso.cantidad == 0){
        itemEgreso.estado = "Agotado";
      }
    }
    itemEgreso.responsable = itemCiclo.responsable;

    // this.servicioInventario.editarItem(itemEgreso);

    let egreso: Egreso = {
      idItem: itemEgreso.id,
      nombreItem: itemEgreso.nombre,
      categoriaItem: itemEgreso.tipo,
      unidades: itemEgreso.unidades,
      fecha: new Date().toISOString(),
      obra: itemCiclo.obra,
      reponsable: itemCiclo.responsable,
    }
    if(itemEgreso.tipo != 'Herramienta'){
      egreso.cantidad = itemCiclo.cantidad;
      // CUANDO ES HERRAMIENTA, SE COLOCA "1 UNIDAD" DE DEFAULT
    } else {
      egreso.cantidad = 1;
    }

    // this.servicioEgresos.agregarEgreso(egreso);
  }
    this.form.reset();
  }

  regresarIndice(indice: number) {
    // return this.inventario.findIndex(item => item.id == this.idsEgreso[indice].id);
}

  borrarForm() {
    this.form.reset();
    this.idsEgreso = [{id: '', cantidad: null, obra: null, responsable: null}]
  }

  agregarItem() {
    // this.idsEgreso.push({id: '', cantidad: null, obra: null, responsable: null});
  }

  restarItem() {
    // this.idsEgreso.pop();
  }

  borrarId(indice: number) {
    this.idsEgreso[indice].id = '';
  }

  revisarCantidad(cantActual: number) {
    for(let item of this.idsEgreso) {
      if(item.cantidad > cantActual || item.cantidad == null || item.cantidad == 0){
        this.valido = false;
        return;
      }
    }
    this.valido = true;

    console.log('Funciona');
  }

}
