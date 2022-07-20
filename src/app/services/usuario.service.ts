import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private http: HttpClient) { }

  getUsuario(){
    const data = this.http.get('http://127.0.0.1:8000/api/User/get');
    return data;
  }

  deleteUsuario(id: Usuario){
    return this.http.delete('http://127.0.0.1:8000/api/User/delete/'+id);
  }

  getUserByID(id: Usuario){
    return this.http.get('http://127.0.0.1:8000/api/User/show/'+id);
  }

  createUser(data: Usuario){
    return this.http.post('http://127.0.0.1:8000/api/User/create', data);
  }

  updateUser(id: Usuario, data: Usuario){
    return this.http.put('http://127.0.0.1:8000/api/User/update/'+id,data);
  }

  existe(email: string):any{
    return this.http.post('http://127.0.0.1:8000/api/User/existe',{email:email});
  }

  cambiarRol(id: Usuario,rol:string){
    return this.http.post('http://127.0.0.1:8000/api/update/'+id,{rol:rol});
  }
}
