import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  getInto = false;
  
  constructor(private formb: FormBuilder, private _snackBar: MatSnackBar, private router: Router,
    private authS: AuthService) { 
  }

  ngOnInit(): void {
    this.form = this.formb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  Ingresar(){
    this.authS.register(this.form.value).subscribe(data =>{
      console.log('registro',data);
    })
    // console.log(this.form);
    // const nombre = this.form.value.nombre;
    // const apellido = this.form.value.apellido;
    // const correo = this.form.value.correo;
    // const contraseña = this.form.value.contraseña;

    // console.log(nombre);
    // console.log(apellido);
    // console.log(correo);
    // console.log(contraseña);


  }

}
