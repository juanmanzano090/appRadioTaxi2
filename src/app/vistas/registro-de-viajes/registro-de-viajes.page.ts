import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulaService } from 'src/app/servicios/formula.service';
import { AlertController } from '@ionic/angular';

export class EnviarViaje{
  constructor(
    public nombre: string,
    public direccion: string,
    public destino: string,
    public id_usuario: string
  ){}
}

@Component({
  selector: 'app-registro-de-viajes',
  templateUrl: './registro-de-viajes.page.html',
  styleUrls: ['./registro-de-viajes.page.scss'],
})
export class RegistroDeViajesPage implements OnInit {

  constructor(private formulaService : FormulaService, private router:Router, public alertController: AlertController) { 
    this.datos_viaje = new EnviarViaje("","","","")
  }
  datos_viaje;
  datos_obtenidos;

  ionViewWillEnter(){
    this.obtenerDatosUsuario();
  }
  async enviarViaje(){

    if(this.datos_viaje.nombre != "" &&
      this.datos_viaje.direccion != "" &&
      this.datos_viaje.destino != "" &&
      this.datos_viaje.id_usuario != "" ){

        this.formulaService.crearViaje(this.datos_viaje).subscribe(
         async (response:any)=>{
            if (response.viaje){

              const alert = await this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Registro Completo',
                message: 'El registro de carrera fue exitoso',
                buttons: ['OK'],
              });
          
              await alert.present();
              
            //  this.router.navigateByUrl(`/inicio`)
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

        this.datos_viaje.nombre = "";
        this.datos_viaje.direccion = "";
        this.datos_viaje.destino = "";
        this.datos_viaje.id_usuario = "";

      }else{
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          subHeader: 'Problema de registro',
          message: 'No se completaron algunos de los datos de registro',
          buttons: ['OK'],
        });
    
        await alert.present();
        
        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      }



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
