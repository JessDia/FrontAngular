import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListUser, Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: ListUser[] = [];

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //Inyectamos el servicio de listar usuarios
  constructor(private _UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    //Cuando inicialicemos el componente llamaremos al metodo de traer usuarios
    this.traerUsuarios();
  }

//Metodo para traer usuario
  traerUsuarios(){
      this._UsuarioService.getUsuario().subscribe((data: any)=>{
      //console.log(data, ' hola'); prueba
      this.dataSource = new MatTableDataSource(data.users);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  //Metodo para eliminar usuario
  eliminarUsuario(){
    //Eliminar usuario
  }

  //Metodo del paginador
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  //Metodo del filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
