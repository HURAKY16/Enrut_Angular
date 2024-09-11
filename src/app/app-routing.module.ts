import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';
import { RegistrarUsuariosComponent } from './registrar-usuarios/registrar-usuarios.component';
import { TablaProductComponent } from './tabla-product/tabla-product.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'registrarProducto',component:RegistrarProductosComponent},
  {path: 'registrarUsuario',component:RegistrarUsuariosComponent},
  {path: 'TablaProductos',component:TablaProductComponent},
  {path: 'TablaUsuarios',component:TablaUsuariosComponent},
  {path: 'Inicio',component:NavbarPrincipalComponent},
  {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
