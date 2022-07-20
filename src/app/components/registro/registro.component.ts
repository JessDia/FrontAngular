import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertasService } from 'src/app/services/alertas.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  getInto = false;
  
  constructor(private formb: FormBuilder, 
    private _snackBar: MatSnackBar, 
    private router: Router,
    private authS: AuthService,
    private alertas: AlertasService) { 
  }

  ngOnInit(): void {
    this.form = this.formb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.getEmail();
  }
  getEmail(){
    return this.form.get('email');
  }

  Ingresar(){
    // if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.form.value.email)){
    //   this.alertas.error('Debe ingresar un correo valido');
    //   return false;
    // }
    this.authS.register(this.form.value).subscribe(data =>{
      console.log('registro',data);
      this.alertas.Exitoso('Usuario registrado exitosamente, por favor inicie sesión');
      this.router.navigate(['/login']);
    });
    console.log(this.form, 'El usuario se esta registrando');
    

    // if(this.form){
    //   this.alertas.Exitoso('Usuario registrado');
    // }else{
    //   this.alertas.error('Hubo un error con el registro, contacte al administrador');
    // }
  }


}
