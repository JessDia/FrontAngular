import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  getInto = false;
  
  constructor(private formb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.formb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Ingresar(){
    console.log(this.form);
    const nombre = this.form.value.nombre;
    const apellido = this.form.value.apellido;
    const correo = this.form.value.correo;
    const contraseña = this.form.value.contraseña;

    console.log(nombre);
    console.log(apellido);
    console.log(correo);
    console.log(contraseña);


  }

}
