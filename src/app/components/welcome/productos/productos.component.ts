import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { AlertasService } from 'src/app/services/alertas.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nombre', 'precio', 'stock', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _productoService: ProductoService,
    private route: Router,
    private alerta: AlertasService) { }

  ngOnInit(): void {
    this.traerProductos();
  }

  //Listar productos
  traerProductos(){
    this._productoService.getProductos().subscribe((data: any) => {
    this.dataSource = new MatTableDataSource(data.productos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
  }

  
  editProductos(id: any){
    this.route.navigate(['/welcome/edit-producto/', id]);
    console.log(id, 'Esta es el id a editar');

  }

  eliminarProducto(id: any){
    this.alerta.Confirmacion('¿Deseas eliminar este producto?').then(result =>{
      if(!result.isConfirmed){
        return;
      }else{
        this._productoService.deleteProductos(id).subscribe(data =>{
          console.log('Producto eliminado');
          this.traerProductos();
          this.alerta.Exitoso('Producto eliminado con exito');
        });
      }
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
