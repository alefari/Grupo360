import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';

import { NavbarComponent } from './shared/navbar/navbar.component';

// IMPORT DE ICONOSDE FONTAWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InventarioRoutingModule } from './modulo_inventario/inventario-routing.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { MenuComponent } from './shared/menu/menu.component';
import { UsuarioComponent } from './shared/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventarioRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
