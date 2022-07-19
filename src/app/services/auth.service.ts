import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Registro, Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // users: any;
  //Registro
  register(usuario: Registro): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', usuario);
  }
  //Login
  loginUser(usuario: Usuario): Observable<Request> {
    return  this.http.post<Request>('http://127.0.0.1:8000/api/auth/login', usuario);
   
  }

  // getUser(){
  //   return this.users.user;
  // }

  // getRol(){
  //   return this.users.user.roles.name;
  // }


  logout(token: Token){
    return this.http.post('http://127.0.0.1:8000/api/auth/logout', token);
  }

  //Info del usuario 
  PerfilUser(){
    
    
    const user: any = localStorage.getItem('user');
    //console.log('llega al PerfilUSer',user);
    const objetoU = JSON.parse(user);
    const token = objetoU.authorisation.token;
    // const auth = new HttpHeaders({
    // Autorization: `Bearer1 ${token}`
    // })
    // console.log(user);
    // console.log(objetoU);
    // console.log(token);
    // console.log(auth);

    return this.http.get('http://127.0.0.1:8000/api/auth/me');
    //return this.http.get('http://127.0.0.1:8000/api/auth/me',{headers: auth});
  }
}
