import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresarComponent } from './components/egresar/egresar.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { InventarioBaseComponent } from './components/inventario-base/inventario-base.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { ReingresoComponent } from './components/reingreso/reingreso.component';

const inventarioRoutes: Routes = [
  { path: '', component: InventarioBaseComponent,
    children: [
      { path: '', component: InventarioComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'egresos', component: EgresosComponent },
      { path: 'ingresar', component: IngresarComponent},
      { path: 'egresar', component: EgresarComponent},
      { path: 'reingreso', component: ReingresoComponent},
      { path: 'modificar', component: ModificarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(inventarioRoutes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
