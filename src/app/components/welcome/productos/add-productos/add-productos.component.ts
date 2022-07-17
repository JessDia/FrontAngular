import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  titulo = 'crear producto';
  titulo_boton = 'Crear';

  constructor(private fb: FormBuilder, 
    private _productService: ProductoService, 
    private route: Router,
    private alertas: AlertasService,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required]
    })
  }

  crearProducto(){
    this._productService.agregarProducto(this.form.value).subscribe(data =>{
      console.log(data);
      this.route.navigate(['/welcome/productos']);
      if(data){
        this.alertas.Exitoso('Producto creado con exito');
      }else{
        this.alertas.error('Error al crear producto');
      }
    })
    //console.log(this.form);
  }

  Actividad(){
    this.crearProducto();
  }

}
