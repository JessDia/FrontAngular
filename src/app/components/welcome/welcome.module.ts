import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { SharedModule } from 'src/app/sharedModule/shared/shared.module';
import { WelcomeComponent } from './welcome.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { RolesComponent } from './roles/roles.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { AddProductosComponent } from './productos/add-productos/add-productos.component';
import { CardsComponent } from './productos/cards/cards.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ProductosComponent,
    RolesComponent,
    CrearUsuarioComponent,
    CrearProductoComponent,
    CrearRolComponent,
    AddProductosComponent,
    CardsComponent,
    EditarUsuarioComponent,
    
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
