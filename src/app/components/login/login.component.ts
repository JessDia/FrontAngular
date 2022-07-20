import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rol: any;
  role = (localStorage.getItem('role'));

  public form: FormGroup = new FormGroup({});

  getInto = false;
  

  constructor(private formb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router, 
    private authS: AuthService,
    private _tokenService: TokenService,
    private alertas: AlertasService) { 
    
  }

  ngOnInit(): void {
    this.form = this.formb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  Ingresar(){
    if(this.form.value.password.length < 6){
      this.alertas.error('La contraseña debe tener más de 6 digitos');
      return false;
    }
    this.authS.loginUser(this.form.value).subscribe((data:any) =>{
      //console.log(data);

      //toma todos los datos 
      this._tokenService.manejarDatos(data.authorisation.token);

      localStorage.setItem('user',JSON.stringify(data));
      localStorage.setItem('estado',JSON.stringify(data.status));
      localStorage.setItem('role',JSON.stringify(data.user.roles[0].id));
      //console.log(this.role,'este es el rol --');
      
      if(data.authorisation.token)
      {
        this.autenticate();
      }else{
        this.error();
      }
    }, err =>{
      console.log(err);
      this.error();
      this.form.reset();
    })
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
