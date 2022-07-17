import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol } from '../Interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  // listaRol: Rol[] = [
  //   {id: 1, nombre: 'Administrador'},
  //   {id: 2, nombre: 'Vendedor'},
  //   {id: 3, nombre: 'Cliente'},
    
  // ];
  
  constructor(private http: HttpClient) { }

  getRol(){
    const data = this.http.get('http://127.0.0.1:8000/api/role');
    //return this.listaRol.slice();
    return data;
  }
}
