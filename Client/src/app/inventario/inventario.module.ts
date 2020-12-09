import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// IMPORTACIONES DE COMPONENTES
import { EgresoComponent } from './components/egreso/egreso.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { ReingresoComponent } from './components/reingreso/reingreso.component';

@NgModule({
  declarations: [
    InventarioComponent,
    ModificarComponent,
    ReingresoComponent,
    IngresosComponent,
    EgresosComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class InventarioModule { }
