import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresosComponent } from './components/egresos/egresos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { InventarioBaseComponent } from './components/inventario-base/inventario-base.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const inventarioRoutes: Routes = [
  { path: '', component: InventarioBaseComponent,
    children: [
      { path: '', component: InventarioComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'egresos', component: EgresosComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(inventarioRoutes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
