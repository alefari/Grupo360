import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/inventario', pathMatch: 'full' },
  {
    path: 'inventario',
    loadChildren: () =>
      import("./inventario/inventario.module").then(m => m.InventarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// , { preloadingStrategy: PreloadAllModules}
