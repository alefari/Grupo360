import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../../../services/inventario.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Item } from 'src/app/models/item.model';
import { Categoria } from 'src/app/models/categoria.model';
import { NgForm } from '@angular/forms';
import { EgresosService } from 'src/app/services/egresos.service';
import { Egreso } from 'src/app/models/egreso.model';
import { UnidadesService } from 'src/app/services/unidades.service';


@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})


export class EgresoComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  inventario: Item[];
  categorias: Categoria[];
  // selectTipo: string;
  idItemElegidoEgreso: string = null;
  cantidadEgreso: number = 0;

  constructor(private servicioInventario: InventarioService,
              private categoriaService: CategoriasService,
              private servicioEgresos: EgresosService)
              { }

  ngOnInit(): void {

    this.categoriaService.obtenerCategorias().subscribe(items => {
      this.categorias = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    })
    this.servicioInventario.obtenerInventario().subscribe(items => {
      this.inventario = items.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  })
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
    let itemEgreso = this.inventario[this.inventario.findIndex(item => item.id == this.idItemElegidoEgreso)];

    if(itemEgreso.tipo == "Herramienta") {
      itemEgreso.estado = "En Obra";
    }
    else {
      itemEgreso.cantidad = itemEgreso.cantidad - this.cantidadEgreso;
    }
    itemEgreso.responsable = this.form.value.responsable;
    this.servicioInventario.editarItem(itemEgreso);

    let egreso: Egreso = {
      idItem: itemEgreso.id,
        fecha: new Date().toISOString(),
        obra: this.form.value.obra,
        reponsable: itemEgreso.responsable,
    }
    if(itemEgreso.tipo != 'Herramienta'){ 
      
    egreso.cantidad = this.cantidadEgreso;
    // CUANDO ES HERRAMIENTA, SE COLOCA "1 UNIDAD" DE DEFAULT
    } else {
  
    egreso.cantidad = 1;
    }

    this.servicioEgresos.agregarEgreso(egreso);

    this.form.reset();
  }

  regresarIndice() {
    return this.inventario.findIndex(item => item.id == this.idItemElegidoEgreso);
}

  borrarForm() {
    this.form.reset();
  }

}
