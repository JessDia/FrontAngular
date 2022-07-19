import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianAdminGuard } from 'src/app/guardian-admin.guard';
import { GuardianVendedorGuard } from 'src/app/guardian-compartido.guard';
import { GuardianRolesGuard } from 'src/app/guardian-roles.guard';
import { GuardianesGuard } from 'src/app/guardianes.guard';
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
  {path: '', component: WelcomeComponent, canActivate:[GuardianesGuard, GuardianRolesGuard] ,children: [
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent, canActivate:[GuardianesGuard, GuardianAdminGuard]},
    {path: 'productos', component: ProductosComponent,
      canActivate:[GuardianVendedorGuard]},//,data:{role:'1'}
    {path: 'roles', component: RolesComponent, canActivate:[GuardianesGuard, GuardianAdminGuard]},
    {path: 'crear-usuario', component: CrearUsuarioComponent, canActivate:[GuardianesGuard, GuardianAdminGuard]},
    {path: 'crear-rol', component: CrearRolComponent, canActivate:[GuardianesGuard,GuardianAdminGuard]},
    {path: 'crear-producto', component: AddProductosComponent, 
      canActivate:[GuardianVendedorGuard]},
    {path: 'edit-producto/:id', component: CrearProductoComponent, 
      canActivate:[GuardianVendedorGuard]},
    {path: 'editar-usuario/:id', component: EditarUsuarioComponent, canActivate:[GuardianesGuard, GuardianAdminGuard]},
    {path: 'editar-rol/:id', component: UpdateRolComponent, canActivate:[GuardianesGuard, GuardianAdminGuard]}

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
