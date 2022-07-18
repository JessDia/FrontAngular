import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Interfaces/rol';
import { AlertasService } from 'src/app/services/alertas.service';
import { RolService } from 'src/app/services/rol.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  rol: Rol[] = [];

  displayedColumns: string[] = ['id', 'name', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private _rolService: RolService,
    private alertas: AlertasService,
    private route: Router) { }

  
  ngOnInit(): void {
    this.traerRol();
  }

  traerRol(){
    this._rolService.getRol().subscribe((data: any)=>{
    console.log(data);
    this.dataSource = new MatTableDataSource(data.rol);
    this.dataSource.paginator = this.paginator;
    });
    //this.dataSource = new MatTableDataSource(this.rol);
  }

  editarRol(id: number){
    this.route.navigate(['/welcome/editar-rol/',id]);
    console.log(id,'Este es el id a editar');
  }

  eliminarRol(id: any){
    this.alertas.Confirmacion('¿Esta seguro que desea eliminar este rol?').then(result =>{
      if(!result.isConfirmed){
        return;
      }else{
        this._rolService.deleteRole(id).subscribe(data =>{
          console.log('Rol eliminado');
          this.traerRol();
          this.alertas.Exitoso('Rol eliminado');
        });
      }
    })
  }

  //cuando se inicialice el ciclo de vida le asignamos al datasource el paginador
  // ngAfterViewInit() {
    
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
