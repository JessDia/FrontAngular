import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }
  error(msn: string){
    Swal.fire({
      title: msn,
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    })
  }

  Exitoso(msn: string){
    Swal.fire({
      //position: 'bottom-end',
      icon: 'success',
      title: msn,
      showConfirmButton: false,
      timer: 1500
    })
  }

  Confirmacion(msn: string){
    return Swal.fire({
      title: msn,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'Cancelar'
      
    })
  }
}
