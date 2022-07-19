import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertasService } from './services/alertas.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianRolesGuard implements CanActivate {
  acceso: boolean = false;
  redireccion(ruta: boolean){
    if(!ruta){
      this.route.navigate(['/welcome']);
    }
  }

  constructor(
    private route: Router,
    private alertas: AlertasService,
  ){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('role')=='2' || localStorage.getItem('role') =='1' 
      || localStorage.getItem('role') =='3'){
        this.acceso = true;
        console.log(this.acceso);
      }else{
        console.log('no autorizado');
        this.alertas.error('Usuario no autorizado');
      }
      this.redireccion(this.acceso);
      return this.acceso;
  
  }
  
}
