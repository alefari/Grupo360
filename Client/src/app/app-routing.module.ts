import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { LoginComponent } from './shared/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SinAuthComponent } from './shared/sin-auth/sin-auth.component';
import { UsuarioComponent } from './shared/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', canActivate: [AuthGuard], component: MenuComponent },
  { path: 'usuario/:id', canActivate: [AuthGuard], component: UsuarioComponent },
  { path: 'noAuth', component: SinAuthComponent },

  {
    path: 'inventario',
    canActivate: [AuthGuard, RolesGuard],
    loadChildren: () => import("./modulo_inventario/inventario.module").then(m => m.InventarioModule),
    data: { allowedRoles: [2] }
  },
  {
    path: 'procura',
    canActivate: [AuthGuard, RolesGuard],
    loadChildren: () => import("./modulo_procura/procura.module").then(m => m.ProcuraModule),
    data: { allowedRoles: [3] }
  },
  {
    path: 'administrador',
    canActivate: [AuthGuard, RolesGuard],
    loadChildren: () => import("./modulo_administrador/administrador.module").then(m => m.AdministradorModule),
    data: { allowedRoles: [1] }
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
