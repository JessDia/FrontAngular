import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProductos: Producto[] = [
    {id: 1, nombre: 'Pan de arequipe y coco', precio: 5000, stock: 50},
    {id: 2, nombre: 'Pan de queso', precio: 3000, stock: 30},
    {id: 3, nombre: 'arepa de chocolo', precio: 2500, stock: 20},
    {id: 4, nombre: 'Pan trenza', precio: 5000, stock: 10},
    {id: 5, nombre: 'Pan de maiz', precio: 2000, stock: 50},
    {id: 6, nombre: 'Cafe con leche', precio: 1500, stock: 50},
    {id: 7, nombre: 'Croissant de queso', precio: 3000, stock: 25},
    {id: 8, nombre: 'Palo de queso', precio: 2000, stock: 40},
    {id: 9, nombre: 'Empanada', precio: 3000, stock: 30},
  
  ];
  
  constructor() { }

  getProductos(){
    //slice metodo para retornar una copia del array
    return this.listaProductos.slice();
  }

  //Metodo para agregar usuario
  agregarProducto(){

  }
}
