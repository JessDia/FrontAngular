import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertasService } from 'src/app/services/alertas.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-update-rol',
  templateUrl: './update-rol.component.html',
  styleUrls: ['./update-rol.component.css']
})
export class UpdateRolComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  id: any;
  data: any;
  roles: any;

  constructor(
    private fb: FormBuilder,
    private _rolService: RolService,
    private route: Router,
    private alertas: AlertasService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    console.log(this.id,'Este es el id a modificar');
    
    if(this.id){
      this.GetRolID();
      this.form = this.fb.group({
        name: ['']
      })
    }else{
      console.log('Formulario para agregar');
      
    }

  }

  actualizarRol(){
    this._rolService.updateRole(this.id,this.roles.rol).subscribe(data =>{
      console.log(data,'Rol actualizado');
      this.alertas.Exitoso('Rol actualizado');
      this.route.navigate(['/welcome/roles']);
    })
  }

  Actividad(){
    if(this.id){
      this.actualizarRol();
    }else{
    }
  }

  GetRolID(){
    this._rolService.getRolByID(this.id).subscribe(data =>{
      console.log('datos id',data);
      this.data = data;
      this.roles = data;
      console.log(this.roles, 'Si se guardan los roles');
      
    })
  }

}
