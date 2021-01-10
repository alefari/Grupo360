import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuarioComponent } from './shared/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },

  { path: 'menu', component: MenuComponent },

  { path: 'usuario/:id', component: UsuarioComponent },

  {
    path: 'inventario',
    canActivate: [AuthGuard],
    loadChildren: () => import("./inventario/inventario.module").then(m => m.InventarioModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// , { preloadingStrategy: PreloadAllModules}
