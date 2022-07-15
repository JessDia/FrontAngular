import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  //Funcion que redirecciona al usuario a la lista
  crearUsuario(){
    console.log(this.form);
  }

}
