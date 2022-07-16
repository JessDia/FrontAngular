import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  
  constructor(private http: HttpClient) { }

  getProductos(){
    console.log('llega al servicio');

    // const user: any = localStorage.getItem('user');
    // const objetoU = JSON.parse(user);
    // const token = objetoU.autorisation.token;
    // const auth = new HttpHeaders({
    //   Autorization: `Bearer ${token}`
    // })
    // console.log(user);
    // console.log(objetoU);
    // console.log(token);
    // console.log(auth);
    return this.http.get('http://127.0.0.1:8000/api/productos');
  }

  //Metodo para agregar usuario
  agregarProducto(){

  }
}
