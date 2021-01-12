import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { UsuarioComponent } from './shared/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', canActivate: [AuthGuard], component: MenuComponent },
  { path: 'usuario/:id', canActivate: [AuthGuard], component: UsuarioComponent },

  {
    path: 'inventario',
    canActivate: [AuthGuard],
    loadChildren: () => import("./modulo_inventario/inventario.module").then(m => m.InventarioModule)
  },
  {
    path: 'proveedores',
    canActivate: [AuthGuard],
    loadChildren: () => import("./modulo_proveedores/proveedores.module").then(m => m.ProveedoresModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
