import { Component, OnInit, NgModule } from '@angular/core';
import { FormulaService } from 'src/app/servicios/formula.service';
import { AlertController } from '@ionic/angular';




export class EnviarDatos {
  constructor(
    public nombre,
    public apellido,
    public rut,
    public correo,
    public password,
  ){}
}

@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.page.html',
  styleUrls: ['./registro-de-usuario.page.scss'],
})
export class RegistroDeUsuarioPage implements OnInit {
  datos_usuario;
  
  constructor(private formulaService : FormulaService,
     public alertController: AlertController,
     public alerta: AlertController,
     ) {
    this.datos_usuario = new EnviarDatos("","","","","")
   }

  ngOnInit() {
  }
  




  async enviarDatos(){


    
    
    if(this.datos_usuario.nombre != "" &&
       this.datos_usuario.apellido != "" &&
       this.datos_usuario.rut != "" &&
       this.datos_usuario.correo != "" &&
       this.datos_usuario.password != "" ){

        
         
    this.formulaService.registrousuario(this.datos_usuario).subscribe(
          (response:any)=>{
            if(response.usuario){
            console.log("registrado correctamente")
            
            }else{
              alert("datos no registrados")
            }
          },
          error=>{
            alert("error de registrar datos")
          } ,
        ),
        console.log("datos del formulario: ",this.datos_usuario);

        this.datos_usuario.nombre = "";
        this.datos_usuario.apellido = "";
        this.datos_usuario.rut = "";
        this.datos_usuario.correo = "";
        this.datos_usuario.password = "";
        this.datos_usuario.dv = "";

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

   if (this.enviarDatos){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro Completo',
      message: 'El registro de usuario fue exitoso',
      buttons: ['OK'],
    });

    await alert.present();
    
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
   }
    


    
  }

}
