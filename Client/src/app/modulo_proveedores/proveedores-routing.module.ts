import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresBaseComponent } from './components/proveedores-base/proveedores-base.component';


const routes: Routes = [
  { path: '', component: ProveedoresBaseComponent,
    children: [
      { path: '', component: ProductosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
