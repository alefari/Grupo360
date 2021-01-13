import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEmpleadosComponent } from './components/admin-empleados/admin-empleados.component';
import { AdministradorBaseComponent } from './components/administrador-base/administrador-base.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';


const routes: Routes = [
  { path: '', component: AdministradorBaseComponent,
    children: [
      { path: '', component: MenuAdministradorComponent },
      { path: 'empleados', component: AdminEmpleadosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
