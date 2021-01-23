import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEmpleadosComponent } from './components/admin-empleados/admin-empleados.component';
import { AdminInventarioComponent } from './components/admin-inventario/admin-inventario.component';
import { AdminParametrosComponent } from './components/admin-parametros/admin-parametros.component';
import { AdministradorBaseComponent } from './components/administrador-base/administrador-base.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { MenuGestioninternaComponent } from './components/menu-gestioninterna/menu-gestioninterna.component';


const routes: Routes = [
  { path: '', component: AdministradorBaseComponent,
    children: [
      { path: '', component: MenuAdministradorComponent },
      { path: 'empleados', component: AdminEmpleadosComponent},
      { path: 'gestion-interna', component: MenuGestioninternaComponent},
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
