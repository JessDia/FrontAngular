import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto';
import { Rol } from '../Interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  roleAs: any;
  isLogin: any;

  constructor(private http: HttpClient) { }

  CreateRole(data: Producto){
    return this.http.post('http://127.0.0.1:8000/api/role',data);
  }

  getRol(){
    const data = this.http.get('http://127.0.0.1:8000/api/role');
    return data;
  }

  updateRole(id: Rol, data: Rol){
    return this.http.put('http://127.0.0.1:8000/api/role/'+id,data);
  }

  deleteRole(id: Rol){
    return this.http.delete('http://127.0.0.1:8000/api/role/'+id,);
  }

  getRolByID(id: Rol){
    return this.http.get('http://127.0.0.1:8000/api/show/role/'+id);
  }

  getRoles(){
    this.roleAs = localStorage.getItem('role');
    return this.roleAs;
  }

  isLoggin(){
    const loggin = localStorage.getItem('user');
    if(loggin == 'success'){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
    return this.isLogin;
  }

  existeRol(name: string):any{
    return this.http.post('http://127.0.0.1:8000/api/role/existe',{name:name});
  }

}
