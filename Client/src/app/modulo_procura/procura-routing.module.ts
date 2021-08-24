import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProcuraBaseComponent } from './components/procura-base/procura-base.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { ModificarProveedorComponent } from './components/modificar-proveedor/modificar-proveedor.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { ActualizarProductosComponent } from './components/actualizar-productos/actualizar-productos.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';


const routes: Routes = [
  { path: '', component: ProcuraBaseComponent,
    children: [
      { path: '', redirectTo: 'proveedores' },
      { path: 'productos', component: ProductosComponent },
      { path: 'productos/agregar', component: AgregarProductoComponent },
      { path: 'productos/modificar', component: ModificarProductoComponent },
      { path: 'productos/gestionar', component: GestionProductosComponent },
      { path: 'proveedores', component: ProveedoresComponent },
      { path: 'proveedores/agregar', component: AgregarProveedorComponent },
      { path: 'proveedores/modificar', component: ModificarProveedorComponent },
      { path: 'proveedores/:id/productos', component: ActualizarProductosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcuraRoutingModule { }
