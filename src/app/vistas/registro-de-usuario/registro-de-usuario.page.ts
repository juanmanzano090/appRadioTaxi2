import { Component, OnInit } from '@angular/core';
import { FormulaService } from 'src/app/servicios/formula.service';


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
  constructor(private formulaService : FormulaService) {
    this.datos_usuario = new EnviarDatos("","","","","")
   }

  ngOnInit() {
  }
  enviarDatos(){
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
      } 
    )
    console.log("datos del formulario: ",this.datos_usuario);
  }

}
