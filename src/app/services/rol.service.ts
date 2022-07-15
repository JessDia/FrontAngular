import { Injectable } from '@angular/core';
import { Rol } from '../Interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  listaRol: Rol[] = [
    {id: 1, nombre: 'Administrador'},
    {id: 2, nombre: 'Vendedor'},
    {id: 3, nombre: 'Cliente'},
    
  ];
  
  constructor() { }

  getRol(){
    return this.listaRol.slice();
  }
}
