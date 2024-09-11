import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';
import { RegistrarUsuariosComponent } from './registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './login/login.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { TablaProductComponent } from './tabla-product/tabla-product.component';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarProductosComponent,
    RegistrarUsuariosComponent,
    LoginComponent,
    TablaUsuariosComponent,
    TablaProductComponent,
    NavbarPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
