import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// IMPORTACIONES DE COMPONENTES
import { EgresosComponent } from './components/egresos/egresos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { ReingresoComponent } from './components/reingreso/reingreso.component';
import { EgresarComponent } from './components/egresar/egresar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioBaseComponent } from './components/inventario-base/inventario-base.component';

@NgModule({
  declarations: [
    InventarioComponent,
    ModificarComponent,
    ReingresoComponent,
    IngresosComponent,
    EgresosComponent,
    IngresarComponent,
    EgresarComponent,
    InventarioBaseComponent
  ],
  imports: [
    RouterModule,
    InventarioRoutingModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class InventarioModule { }
