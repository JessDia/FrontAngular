import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  
  { path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  
  {path: 'welcome', loadChildren: ()=> import('./components/welcome/welcome.module').then(x => x.WelcomeModule)},
  {path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
