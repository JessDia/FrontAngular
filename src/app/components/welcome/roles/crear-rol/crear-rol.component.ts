import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { RolService } from 'src/app/services/rol.service';


@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {

  public form: FormGroup = new FormGroup({});


  constructor(
    private fb: FormBuilder, 
    private _rolService: RolService, 
    private route: Router,
    private alertas: AlertasService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    })
  }

  crearRol(){
    this._rolService.CreateRole(this.form.value).subscribe(data =>{
      console.log(data,'Estamos creando el rol');
      this.alertas.Exitoso('El nuevo rol ha sido creado');
      this.route.navigate(['/welcome/roles']);
    })
  }

  Actividad(){
    this.crearRol();
  }


}
