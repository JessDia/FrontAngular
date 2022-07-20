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

  
  agregarProducto(data: Producto){
    return this.http.post('http://127.0.0.1:8000/api/addProductos', data);
  }

  
  getProductobyID(id: Producto){
    return this.http.get('http://127.0.0.1:8000/api/productosByID/' + id);
  }

  deleteProductos(id: Producto){
    return this.http.delete('http://127.0.0.1:8000/api/deleteProductos/'+id);
  }

  updateProductos(id: Producto,data: Producto){
    return this.http.put('http://127.0.0.1:8000/api/updateProductos/'+id, data);
  }

  comprarProducto(id: any,data: any){
    return this.http.put('http://127.0.0.1:8000/api/comprar/'+id,data);
  }

  existe(nombre: string):any{
    return this.http.post('http://127.0.0.1:8000/api/producto/existe',{nombre:nombre});
  }
  
}
