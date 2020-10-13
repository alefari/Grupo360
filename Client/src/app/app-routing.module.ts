import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import {EgresosComponent}  from './components/egresos/egresos.component'


const routes: Routes = [
  { path: '', component: InventarioComponent},
  { path: 'inventario', component: InventarioComponent },
  { path: 'ingresos', component: IngresosComponent },
  {path: 'egresos', component: EgresosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
