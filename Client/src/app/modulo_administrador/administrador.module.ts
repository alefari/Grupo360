import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdminEmpleadosComponent } from './components/admin-empleados/admin-empleados.component';
import { AdministradorBaseComponent } from './components/administrador-base/administrador-base.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdministradorBaseComponent,
    MenuAdministradorComponent,
    AdminEmpleadosComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class AdministradorModule { }
