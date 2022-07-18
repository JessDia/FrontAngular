import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/usuario';
import { AlertasService } from 'src/app/services/alertas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  id: any;
  data: any;
  usuarios: any;

  constructor(
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private route: Router,
    private alertas: AlertasService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    console.log(this.id, 'Este es el id a modificar');

    if(this.id){
      this.getUsuarioID();
      this.form = this.fb.group({
        name: [''],
        lastname: [''],
        email: [''],
        
      })
    }else{
      console.log('formulario para agregar');
    }
  }


  actualizarUsuario(){
    this._usuarioService.updateUser(this.id, this.usuarios.users).subscribe(data =>{
      console.log(data, 'Datos actualizados correctamente');
      this.alertas.Exitoso('Datos actualizados correctamente');
      this.route.navigate(['welcome/usuarios']);
    })
  }

  Actividad(){
    if(this.id){
      this.actualizarUsuario();
    }else{
    }
  }

  getUsuarioID(){
    this._usuarioService.getUserByID(this.id).subscribe(data =>{
      console.log('datos id', data);
      this.data = data;
      this.usuarios = data;
      console.log(this.usuarios, 'Si se guardan los usuarios');
    });
  }

}
