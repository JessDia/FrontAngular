import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // listaproducto: Producto[] = [
  //   {id: 1, nombre: 'Arepa de chocolo', precio: 2500, stock: 20},
  //   {id: 3, nombre: 'Arepa', precio: 2500, stock: 20},
  // ]


  constructor(private http: HttpClient) { }

  getProductos(){
    const data = this.http.get('http://127.0.0.1:8000/api/productos');
    //console.log(data); prueba
    return data;
  }

  //Metodo para agregar usuario
  agregarProducto(){

  }
}
