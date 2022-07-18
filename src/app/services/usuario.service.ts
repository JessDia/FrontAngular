import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 // listaUsuarios: Usuario[] = [
    // {id: 1, name: 'Jessica', lastname: 'Diaz', email: 'jp@prueba.com', password: 123456},
    // {id: 2, name: 'Duvan', lastname: 'Rodriguez', email: 'duvan@prueba.com', password: 123456},
    // {id: 3, name: 'Jessica', lastname: 'Diaz', email: 'jp@prueba.com', password: 123456},
  
  //];
  
  constructor(private http: HttpClient) { }

  getUsuario(){
    const data = this.http.get('http://127.0.0.1:8000/api/User/get');
    //return this.listaUsuarios.slice();
    return data;
  }

  deleteUsuario(id: Usuario){
    return this.http.delete('http://127.0.0.1:8000/api/User/delete/'+id);
  }
}
