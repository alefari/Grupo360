import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcuraRoutingModule } from './procura-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProcuraBaseComponent } from './components/procura-base/procura-base.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuProcuraComponent } from './components/menu-procura/menu-procura.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { ModificarProveedorComponent } from './components/modificar-proveedor/modificar-proveedor.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { ActualizarProductosComponent } from './components/actualizar-productos/actualizar-productos.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';


@NgModule({
  declarations: [
    ProcuraBaseComponent,
    ProductosComponent,
    MenuProcuraComponent,
    ProveedoresComponent,
    AgregarProveedorComponent,
    ModificarProveedorComponent,
    AgregarProductoComponent,
    ModificarProductoComponent,
    ActualizarProductosComponent,
    GestionProductosComponent
  ],
  imports: [
    CommonModule,
    ProcuraRoutingModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class ProcuraModule { }
