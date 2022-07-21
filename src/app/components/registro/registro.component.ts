import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  getInto = false;
  existe= 0;
  
  constructor(private formb: FormBuilder, 
    private _snackBar: MatSnackBar, 
    private router: Router,
    private authS: AuthService,
    private alertas: AlertasService,
    private _usuarioService: UsuarioService) { 
  }

  ngOnInit(): void {
    this.form = this.formb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  
 
  async Ingresar(){
    
    //---Validaciones
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(this.form.value.email)) {
      this.alertas.error('Debe ingresar un correo valido');
      return false;
    }
    
    if(this.form.value.password.length < 6){
      this.alertas.error('La contraseña debe tener más de 6 digitos');
      return false;
    }

    this._usuarioService.existe(this.form.value.email).subscribe((existe:any)=>{
      this.existe = existe.status;
      if(this.existe==1){
        this.alertas.error('Este correo ya existe');
        return false;
      }
      this.authS.register(this.form.value).subscribe(data =>{
        this.alertas.Exitoso('Usuario registrado exitosamente, por favor inicie sesión');
        this.router.navigate(['/login']);
      });
    });

    
    
  }


}
