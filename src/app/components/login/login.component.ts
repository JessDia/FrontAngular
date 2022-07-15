import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  getInto = false;

  constructor(private formb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.formb.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Ingresar(){
    console.log(this.form);
    const correo = this.form.value.correo;
    const contraseña = this.form.value.contraseña;

    console.log(correo);
    console.log(contraseña);

    if(correo== 'jp@prueba.com' && contraseña == '123456'){
      //Redireccionamos 
      this.autenticate();
    }else{
      //mostramos un mensaje de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Correo o clave invalida', 'Cerrar', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  autenticate(){
    this.getInto = true;
    setTimeout(() => {
      //Redireccionar
      this.router.navigate(['welcome']);
    },1500);
  }
  

}
