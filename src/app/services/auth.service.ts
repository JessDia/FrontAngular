import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Registro, Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Registro
  register(usuario: Registro): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', usuario);
  }
  //Login
  loginUser(usuario: Usuario): Observable<Request> {
    return this.http.post<Request>('http://127.0.0.1:8000/api/auth/login', usuario);
  }

  //Info del usuario 
  PerfilUser(){
    console.log('llega al PerfilUSer');
    
    const user: any = localStorage.getItem('user');
    const objetoU = JSON.parse(user);
    const token = objetoU.autorisation.token;
    const auth = new HttpHeaders({
    Autorization: `Bearer ${token}`
    })
    console.log(user);
    console.log(objetoU);
    console.log(token);
    console.log(auth);

    return this.http.get('http://127.0.0.1:8000/api/auth/me',{headers: auth});
  }
}
