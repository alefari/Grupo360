import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresosComponent } from './components/egresos/egresos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
  { path: '',
    component: InventarioComponent,
  //   children: [
  //     { path: 'ingresos', component: IngresosComponent },
  //     { path: 'egresos', component: EgresosComponent }
  // ]
  },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'egresos', component: EgresosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
