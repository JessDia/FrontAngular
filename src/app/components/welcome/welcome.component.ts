import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _rolService: RolService) { 

  }

  ngOnInit(): void {
    // this._rolService.getRoles().subscribe((data: any) =>{
    //   console.log(data);
      
    // });
    // this._rolService.isLoggin().subscribe((data:any) =>{
    //   console.log(data);
    // });
  }

}
