import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProveedoresBaseComponent } from './components/proveedores-base/proveedores-base.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuProveedoresComponent } from './components/menu-proveedores/menu-proveedores.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { ModificarProveedorComponent } from './components/modificar-proveedor/modificar-proveedor.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';


@NgModule({
  declarations: [
    ProveedoresBaseComponent,
    ProductosComponent,
    MenuProveedoresComponent,
    ProveedoresComponent,
    AgregarProveedorComponent,
    ModificarProveedorComponent,
    AgregarProductoComponent,
    ModificarProductoComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class ProveedoresModule { }
