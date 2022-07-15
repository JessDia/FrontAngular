import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  //Cuando el usuario ingrese a esta ruta quiero que renderice este componente
  { path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  //Configuramos carga perezosa= solo traera algunos componentes  y a medida de el usuario navegar se cargaran los demas componentes 
  //Ayuda a mejorar la velocidad de primera carga a nuestro sistema.
  {path: 'welcome', loadChildren: ()=> import('./components/welcome/welcome.module').then(x => x.WelcomeModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
