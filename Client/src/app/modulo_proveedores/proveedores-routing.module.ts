import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresBaseComponent } from './components/proveedores-base/proveedores-base.component';
import { MenuProveedoresComponent } from './components/menu-proveedores/menu-proveedores.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { ModificarProveedorComponent } from './components/modificar-proveedor/modificar-proveedor.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';


const routes: Routes = [
  { path: '', component: ProveedoresBaseComponent,
    children: [
      { path: '', component: MenuProveedoresComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'productos/agregar', component: AgregarProductoComponent },
      { path: 'productos/modificar', component: ModificarProductoComponent },
      { path: 'proveedores', component: ProveedoresComponent },
      { path: 'proveedores/agregar', component: AgregarProveedorComponent },
      { path: 'proveedores/modificar', component: ModificarProveedorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
