import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  producto: any;

  constructor(private auth: AuthService,private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.auth.PerfilUser().subscribe(data =>{
    console.log(data);
    });
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProductos().subscribe((data: any) =>{
      this.producto=data.productos;
      console.log(this.producto);
      
    });
    
    
    
  }

}
