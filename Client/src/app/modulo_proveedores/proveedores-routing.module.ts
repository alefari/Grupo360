import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProveedoresBaseComponent } from './components/proveedores-base/proveedores-base.component';
import { MenuProveedoresComponent } from './components/menu-proveedores/menu-proveedores.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { ModificarProveedorComponent } from './components/modificar-proveedor/modificar-proveedor.component';


const routes: Routes = [
  { path: '', component: ProveedoresBaseComponent,
    children: [
      { path: '', component: MenuProveedoresComponent },
      { path: 'productos', component: ProductosComponent },
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
