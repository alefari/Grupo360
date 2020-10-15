import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InventarioComponent } from './components/inventario/inventario.component';

// IMPORTACIONES PARA FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';
import { IngresoComponent } from './components/inventario/ingreso/ingreso.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReingresoComponent } from './components/inventario/reingreso/reingreso.component';
import { EgresoComponent } from './components/inventario/egreso/egreso.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';

import { InventarioSQLService } from './services/inventario-sql.service'

// IMPORT DE ICONOSDE FONTAWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EgresosComponent } from './components/egresos/egresos.component';
import { ModificarComponent } from './components/inventario/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventarioComponent,
    IngresoComponent,
    NavbarComponent,
    ReingresoComponent,
    EgresoComponent,
    IngresosComponent,
    EgresosComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    InventarioSQLService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
