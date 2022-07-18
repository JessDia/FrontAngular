import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
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
    private alertas: AlertasService) {
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  crearUsuario(){
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
