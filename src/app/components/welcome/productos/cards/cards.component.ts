import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  producto: any;
  
  constructor(private productos: ProductoService) { }

  ngOnInit(): void {
  }

  getProductos(){
    this.productos.getProductos().subscribe(data =>{
      this.producto=data;
    });
    
  }
}
