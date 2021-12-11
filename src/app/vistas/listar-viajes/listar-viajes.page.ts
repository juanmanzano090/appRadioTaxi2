import { Component, OnInit } from '@angular/core';
import { FormulaService } from 'src/app/servicios/formula.service';

@Component({
  selector: 'app-listar-viajes',
  templateUrl: './listar-viajes.page.html',
  styleUrls: ['./listar-viajes.page.scss'],
})
export class ListarViajesPage implements OnInit {

  constructor(private formulaService : FormulaService) { }
  datos_obtenidos;

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.obtenerViaje();
  }
  obtenerViaje(){
    this.formulaService.obtenerViaje().subscribe(
      (response:any)=> {
        this.datos_obtenidos = response.viajes;
        console.log(this.datos_obtenidos)
      },
      error=>{
        alert("error en la peticion")
      }
      
    );
  }

}
