import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEmpleadosComponent } from './components/admin-empleados/admin-empleados.component';
import { AdminInventarioComponent } from './components/admin-inventario/admin-inventario.component';
import { AdminParametrosComponent } from './components/admin-parametros/admin-parametros.component';
import { AdministradorBaseComponent } from './components/administrador-base/administrador-base.component';


const routes: Routes = [
  { path: '', component: AdministradorBaseComponent,
    children: [
      { path: '', redirectTo: 'empleados' },
      { path: 'empleados', component: AdminEmpleadosComponent},
      { path: 'gestion-interna/gestion-inv', component: AdminInventarioComponent},
      { path: 'gestion-interna/parametros', component: AdminParametrosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
