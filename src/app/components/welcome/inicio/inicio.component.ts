import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  id: any;
  producto: any;
  public form: FormGroup = new FormGroup({});

  constructor(
    private auth: AuthService,
    private _productoService: ProductoService,
    private fb: FormBuilder,
    private alertas: AlertasService,
    private _authService: AuthService) { }

  ngOnInit(): void {
    this.auth.PerfilUser().subscribe(data =>{
    console.log(data);
    });

    this.getProductos();

    //formulario para generar compra
    this.form = this.fb.group({
      cantidad: ['',Validators.required],
    });
  }

  getProductos(){
    this._productoService.getProductos().subscribe((data: any) =>{
      this.producto=data.productos;
      console.log(this.producto);
    });
  }

  comprar(id:any){
    this._productoService.comprarProducto(id,this.form.value).subscribe(data =>{
      console.log('Aqui generamos compra',data);
      this.alertas.Exitoso('Compra exitosa, recuerde confirmar datos de envio');
      this.getProductos();
      this.form.reset();
    });
  }

}
