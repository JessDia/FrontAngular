import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/Interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  Productos: Producto[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'precio', 'stock', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.traerProductos();
  }

  traerProductos(){
    this.Productos = this._productoService.getProductos();
    this.dataSource = new MatTableDataSource(this.Productos);
  }

  eliminarProducto(){
    //Ventana de confirmación
  }

  //cuando se inicialice el ciclo de vida le asignamos al datasource el paginador
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
