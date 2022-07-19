import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { AlertasService } from './services/alertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafekonecta';

  constructor(
    private timeOut: BnNgIdleService,
    private route: Router,
    private alertas: AlertasService){
      this.timeOut.startWatching(300).subscribe((res)=>{ 
        if(res){
          console.log("sessión expirada");
          localStorage.removeItem('token');
          this.alertas.error('Sesión expirada, inicie sesión');
          this.route.navigate(['/login']);
        }
      })
  }
}
