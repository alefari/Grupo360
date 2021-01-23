import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdminEmpleadosComponent } from './components/admin-empleados/admin-empleados.component';
import { AdministradorBaseComponent } from './components/administrador-base/administrador-base.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuGestioninternaComponent } from './components/menu-gestioninterna/menu-gestioninterna.component';
import { AdminInventarioComponent } from './components/admin-inventario/admin-inventario.component';
import { AdminParametrosComponent } from './components/admin-parametros/admin-parametros.component';



@NgModule({
  declarations: [
    AdministradorBaseComponent,
    MenuAdministradorComponent,
    AdminEmpleadosComponent,
    MenuGestioninternaComponent,
    AdminInventarioComponent,
    AdminParametrosComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class AdministradorModule { }
