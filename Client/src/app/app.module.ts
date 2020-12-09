import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { NavbarComponent } from './components/navbar/navbar.component';

// IMPORT DE ICONOSDE FONTAWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InventarioRoutingModule } from './inventario/inventario-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventarioRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
