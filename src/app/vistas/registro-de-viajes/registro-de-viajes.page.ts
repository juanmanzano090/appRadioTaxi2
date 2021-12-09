import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulaService } from 'src/app/servicios/formula.service';

export class EnviarViaje{
  constructor(
    public nombre: string,
    public direccion: string,
    public destino: string,
  ){}
}

@Component({
  selector: 'app-registro-de-viajes',
  templateUrl: './registro-de-viajes.page.html',
  styleUrls: ['./registro-de-viajes.page.scss'],
})
export class RegistroDeViajesPage implements OnInit {

  constructor(private formulaService : FormulaService, private router:Router) { 
    this.datos_viaje = new EnviarViaje("","","")
  }
  datos_viaje;
  datos_obtenidos;

  ionViewWillEnter(){
    this.obtenerDatosUsuario();
  }
  enviarViaje(){
    this.formulaService.crearViaje(this.datos_viaje).subscribe(
      (response:any)=>{
        if (response.viaje){
          this.router.navigateByUrl(`/inicio`)
          console.log("registrado correctamente")
        }else{
          alert("datos no registrados")
        }
      },
      error=>{
        alert("error de registrar datos")
      }
    )
    console.log("Datos del viaje: ",this.datos_viaje);
  }

  obtenerDatosUsuario(){
    this.formulaService.obtenerDatosUsuario().subscribe(
      (response:any)=>{
        this.datos_obtenidos = response.usuarios;
        console.log(this.datos_obtenidos)
      },
      error=>{
        alert("error en la peticion")
      }
    );
  }

  ngOnInit() {
  }

}
