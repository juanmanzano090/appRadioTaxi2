import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormulaService } from 'src/app/servicios/formula.service';
import { AlertController } from '@ionic/angular';


export class EnviarLogin{
  constructor(
    public user: string,
    public password: string,

  ){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formulaService : FormulaService, private router:Router, public alertController: AlertController) { 
    this.datos_login = new EnviarLogin("","")
  }

  datos_login;
  datos_auth;



  async  enviarLogin(){
   
 this.formulaService.obtenerLogin(this.datos_login.user).subscribe(
  (response:any)=>{
    this.datos_auth = response.usuarios;
    console.log(this.datos_auth);
    let datos_auth = this.datos_auth


  },
  
  error=>{
    alert("error en la peticion")
  }
  
  
);

    if(this.datos_login.user == this.datos_auth.nombre) {
      this.router.navigateByUrl(`/inicio`)
      console.log("autentificado correctamente")
    }else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message password.',
        buttons: ['OK'],
      });
  
      await alert.present();
      
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }
    
  


  ngOnInit() {
  }

}
