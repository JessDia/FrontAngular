import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Rol } from 'src/app/Interfaces/rol';
import { RolService } from 'src/app/services/rol.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rol: Rol[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _rolService: RolService) { }

  
  ngOnInit(): void {
    this.traerRol();
  }

  traerRol(){
    this.rol = this._rolService.getRol();
    this.dataSource = new MatTableDataSource(this.rol);
  }

  eliminarRol(){
    //Mostrar ventana para confirmar eliminación del rol
  }

  //cuando se inicialice el ciclo de vida le asignamos al datasource el paginador
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
