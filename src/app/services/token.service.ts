import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  prueba_token: boolean = false;

  private direcciones = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    register: 'http://127.0.0.1:8000/api/auth/register'
  }
  constructor() { }

  manejarDatos(token: any){
    console.log('Grabando el token'); //prueba
    localStorage.setItem('auth_token', token);
  }
  obtenerToken(){
    return localStorage.getItem('auth_token');
  }

  // Verificar Token
  tokenValido() {
    const token = this.obtenerToken();
    if (token) {
      const cargar = this.cargar(token);
      if (cargar) {
        return Object.values(this.direcciones).indexOf(cargar.iss) > -1
          ? true
          : false;
      }
    } else {
      return false;
    }
  }
  cargar(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
  // Estado valido del token
  isLoggedIn() {
    return this.tokenValido();
  }
  // remover token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
