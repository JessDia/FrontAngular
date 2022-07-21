import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Interfaces/rol';
import { AlertasService } from 'src/app/services/alertas.service';
import { AuthService } from 'src/app/services/auth.service';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  

  public form: FormGroup = new FormGroup({});
  existe= 0;

  listaRoles: any;
  roles: Rol[] = [];

  constructor(private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private route: Router,
    private alertas: AlertasService,
    private roleService: RolService
    ) {
    
  }

  ngOnInit(): void {

    //Select rol
    this.roleService.getRol().subscribe((data:any) =>{
      this.listaRoles = data.rol;
      console.log(this.listaRoles,'aqui estan los roles');
    })
    
    this.form = this.fb.group({
      name: ['',Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required ],
      roles: ['' ,Validators.required],
      password: ['', Validators.required]
    });

  }


  async crearUsuario(){
  
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(this.form.value.email)) {
      this.alertas.error('Debe ingresar un correo valido');
      return false;
    }
    
    if(this.form.value.password.length < 6){
      this.alertas.error('La contraseña debe tener más de 6 digitos');
      return false;
    }

    this._usuarioService.existe(this.form.value.email).subscribe((existe:any) =>{
  
      this.existe = existe.status;
      if(this.existe==1){
        this.alertas.error('Este email ya existe');
          return false;
        }

        this._usuarioService.createUser(this.form.value).subscribe(data =>{
          this.alertas.Exitoso('Usuario creado con exito');
          this.route.navigate(['/welcome/usuarios']);
        })
    });

  }

  Actividad(){
    this.crearUsuario();
  }

  existeUsuario(){
    this._usuarioService.existe(this.form.value.email).subscribe((data:any) =>{
      this.existe = data.status;
      return data.status;
    });
    return this.existe;
  }
}
