import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable({
  providedIn: 'root'
})

export class GuardianesGuard implements CanActivate, CanActivateChild {
  
  prueba_token: boolean = false;
  rol = localStorage.getItem('rol');

  constructor(private route: Router,
    private _AuthToken: TokenService){
  }

  redireccion(ruta: boolean){
    if(!ruta){
      this.route.navigate(['/login']);
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //auth_token
      if(localStorage.getItem('auth_token')){
        this.prueba_token = true;
        console.log(this.prueba_token);
        
      }else{
        console.log('no token');
      }
      
      this.redireccion(this.prueba_token);
      return this.prueba_token;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  
}
