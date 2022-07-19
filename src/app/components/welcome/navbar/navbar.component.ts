import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;

  constructor(
    private _authService: AuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('auth_token');
  }

  logout(){
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.route.navigate(['/login']);
    console.log('se Cierra sesión');
  }

}
