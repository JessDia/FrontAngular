import { Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {id: 1, nombre: 'Jessica', apellido: 'Diaz', correo: 'jp@prueba.com'},
    {id: 2, nombre: 'Duvan', apellido: 'Rodriguez', correo: 'duvan@prueba.com'},
    {id: 3, nombre: 'Jessica', apellido: 'Diaz', correo: 'jp@prueba.com'},
    {id: 4, nombre: 'Duvan', apellido: 'Rodriguez', correo: 'duvan@prueba.com'},
    {id: 5, nombre: 'Ruben', apellido: 'Velez', correo: 'duvan@prueba.com'},
    {id: 6, nombre: 'Estivent', apellido: 'Rodri', correo: 'duvan@prueba.com'},
    {id: 7, nombre: 'paola', apellido: 'patiño', correo: 'duvan@prueba.com'},
    {id: 8, nombre: 'Antony', apellido: 'Rodriguez', correo: 'duvan@prueba.com'},
    {id: 9, nombre: 'Duvan', apellido: 'Rodriguez', correo: 'duvan@prueba.com'},
    {id: 10, nombre: 'Duvan', apellido: 'Rodriguez', correo: 'duvan@prueba.com'},
    {id: 11, nombre: 'Duvan', apellido: 'Rodriguez', correo: 'duvan@prueba.com'},
    {id: 12, nombre: 'Duvan', apellido: 'Rodriguez', correo: 'duvan@prueba.com'},
  
    
  ];
  
  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }
}
