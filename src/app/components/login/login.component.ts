import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  getInto = false;

  constructor(private formb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, 
    private authS: AuthService) { 
    
  }

  ngOnInit(): void {
    this.form = this.formb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  Ingresar(){
    //invocamos el servicios
    this.authS.loginUser(this.form.value).subscribe((data:any) =>{
      console.log(data);

      //toma todos los datos 
      localStorage.setItem('user',JSON.stringify(data));
      // localStorage.setItem('token',JSON.stringify(data.authorisation.token));
      //console.log(localStorage.setItem('user',JSON.stringify(data)))

      if(data.authorisation.token)
      {
        this.autenticate();
      }else{
        this.error();
      }
    }, err =>{
      console.log(err);
      this.error();
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
