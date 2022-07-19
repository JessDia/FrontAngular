import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private route: Router,
    private alertas: AlertasService,
    private _authService: AuthService,
    ) {
    
  }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      name: ['',Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  crearUsuario(){
  
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(this.form.value.email))){
      this.alertas.error('Debe ingresar un correo valido');
      return false;
    }
    this._usuarioService.createUser(this.form.value).subscribe(data =>{
      console.log(data);
      this.alertas.Exitoso('Usuario creado con exito');
      this.route.navigate(['/welcome/usuarios']);
    })
    console.log(this.form);
  }

  Actividad(){
    this.crearUsuario();
  }
}
