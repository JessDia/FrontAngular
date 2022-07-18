import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto';
import { Rol } from '../Interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  getRol(){
    const data = this.http.get('http://127.0.0.1:8000/api/role');
    return data;
  }

  CrearRol(data: Producto){
    return this.http.post('http://127.0.0.1:8000/api/role',data);
  }

  

}
