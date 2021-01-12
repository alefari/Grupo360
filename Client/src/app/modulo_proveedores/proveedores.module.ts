import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProveedoresBaseComponent } from './components/proveedores-base/proveedores-base.component';
import { ProductosComponent } from './components/productos/productos.component';


@NgModule({
  declarations: [
    ProveedoresBaseComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class ProveedoresModule { }
