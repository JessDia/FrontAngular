import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListUser, Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertasService } from 'src/app/services/alertas.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  //usuarios: ListUser[] = [];

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private _UsuarioService: UsuarioService,
    private alertas: AlertasService) { }

  ngOnInit(): void {
    this.traerUsuarios();
  }


  //Leer registros
  traerUsuarios(){
      this._UsuarioService.getUsuario().subscribe((data: any)=>{
      //console.log(data, ' hola'); prueba
      this.dataSource = new MatTableDataSource(data.users);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  
  eliminarUsuario(id: any){
    this.alertas.Confirmacion('¿Esta seguro que desea eliminar este usuario?').then(result =>{
      if(!result.isConfirmed){
        return;
      }else{
        this._UsuarioService.deleteUsuario(id).subscribe(data =>{
          console.log('Producto eliminado');
          this.traerUsuarios();
          this.alertas.Exitoso('Usuario eliminado correctamente');
        });
      }
    })
  }

  //Metodo del paginador
  // ngAfterViewInit() {
  //   //this.dataSource.paginator = this.paginator;
  //   //this.dataSource.sort = this.sort;
  // }

  //Metodo del filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
