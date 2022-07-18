import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AddProductosComponent } from './productos/add-productos/add-productos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { RolesComponent } from './roles/roles.component';
import { UpdateRolComponent } from './roles/update-rol/update-rol.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, children: [
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    {path: 'crear-rol', component: CrearRolComponent},
    {path: 'crear-producto', component: AddProductosComponent},
    {path: 'edit-producto/:id', component: CrearProductoComponent},
    {path: 'editar-usuario/:id', component: EditarUsuarioComponent},
    {path: 'editar-rol/:id', component: UpdateRolComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
