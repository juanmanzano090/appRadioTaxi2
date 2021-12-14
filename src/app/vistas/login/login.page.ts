import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormulaService } from 'src/app/servicios/formula.service';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


export class EnviarLogin{
  constructor(
    public user: String,
    public password: String,

  ){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formulaService : FormulaService, 
              private router:Router, 
              public alertController: AlertController,
              private menu: MenuController) { 
    this.datos_login = new EnviarLogin("","")
  }

  datos_login;
  datos_auth;
  datos_obtenidos;


  onPageDidEnter() {
    // the left menu should be disabled on the login page
    this.menu.enable(false);
  }

  onPageDidLeave() {
    // enable the left menu when leaving the login page
    this.menu.enable(true);
  }


  async  enviarLogin(){
   
 this.formulaService.obtenerLogin(this.datos_login.user).subscribe(
  (response:any)=>{
    this.datos_auth = response.usuarios;
    console.log(this.datos_auth);

  },
  
  error=>{
    alert("error en la peticion")
  }
  
);

    if(this.datos_login.user == this.datos_auth.correo &&
      this.datos_login.password == this.datos_auth.password) {
      this.router.navigateByUrl(`/inicio`)
      console.log("autentificado correctamente")
    }else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'LOGIN',
        message: 'El usuario no esta registrado',
        buttons: ['OK'],
      });
  
      await alert.present();
      
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }
    
  


  ngOnInit() {
  }
  ionViewWillLeave(){
    this.onPageDidLeave();
  }
  ionViewWillEnter(){
    this.obtenerDatosUsuario();
    this.onPageDidEnter();
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

}
