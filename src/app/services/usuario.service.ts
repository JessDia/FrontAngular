import { Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    // {id: 1, name: 'Jessica', lastname: 'Diaz', email: 'jp@prueba.com', password: 123456},
    // {id: 2, name: 'Duvan', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
    // {id: 3, name: 'Jessica', lastname: 'Diaz', email: 'jp@prueba.com', password: 123456},
    // {id: 4, name: 'Duvan', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
    // {id: 5, name: 'Ruben', lastname: 'Velez', email: 'duvan@prueba.com', password: 123456},
    // {id: 6, name: 'Estivent', lastname: 'Rodri', email: 'duvan@prueba.com', password: 123456},
    // {id: 7, name: 'paola', lastname: 'patiño', email: 'duvan@prueba.com', password: 123456},
    // {id: 8, name: 'Antony', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
    // {id: 9, name: 'Duvan', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
    // {id: 10, name: 'Duvan', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
    // {id: 11, name: 'Duvan', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
    // {id: 12, name: 'Duvan', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
  
    
  ];
  
  constructor() { }

  getUsuario(){
    return this.listaUsuarios.slice();
  }
}
