import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/Interfaces/producto';
import { Producto2 } from 'src/app/Interfaces/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  id: any;
  titulo = 'crear producto';
  titulo_boton = 'Crear';
  productos: any;
  data: any;

  constructor(
    private fb: FormBuilder, 
    private _productService: ProductoService, 
    private route: Router,
    private alertas: AlertasService,
    private activeRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    console.log(this.id, 'este es el id a modificar');
    

    if(this.id){
        this.getProductoById();
        this.titulo = 'Actualizar producto';
        this.titulo_boton = 'Actualizar';
        this.form = this.fb.group({
          nombre: [''],
          precio: [''],
          stock: ['']
        })
    }else{
      console.log('formulario para agregar');
      
    }

    
  }

 

  updateProductos(){
    this._productService.updateProductos(this.id,this.productos.productos).subscribe(data =>{
      console.log('actualizado correctamente', data);
      this.route.navigate(['/welcome/productos']);
      if(data){
        this.alertas.Exitoso('Producto actualizado correctamente');
      }else{
        this.alertas.error('Error al actualizar');
      }
    });
  }

  Actividad(){
    if(this.id){
      this.updateProductos();
    }else{
      
    }
  }

  getProductoById(){
    this._productService.getProductobyID(this.id).subscribe(data =>{
      console.log('datos id', data);
      this.data = data;
      
      this.productos = data;
      
      
      console.log(this.productos,'si se guardan los productos');
      
      
    })
  }

}
