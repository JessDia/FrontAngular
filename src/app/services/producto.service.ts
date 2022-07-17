import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductos(){
    const data = this.http.get('http://127.0.0.1:8000/api/productos');
    //console.log(data); prueba
    return data;
  }

  //Metodo para agregar usuario
  agregarProducto(data: Producto){
    return this.http.post('http://127.0.0.1:8000/api/addProductos', data);
  }

  getProductobyID(id: any){
    return this.http.get('http://127.0.0.1:8000/api/productosByID/' + id);
  }

  deleteProductos(id: any){
    return this.http.delete('http://127.0.0.1:8000/api/deleteProductos/'+id);
  }

  updateProductos(id: any,data: any){
    return this.http.put('http://127.0.0.1:8000/api/updateProductos/'+id, data);
  }
}
