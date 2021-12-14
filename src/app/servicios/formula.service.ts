import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  backend = environment.backend+"/usuario";
  backend1 = environment.backend+"/viaje";

  constructor(private http: HttpClient) { }

  obtenerOpts(){
    return this.http.get<Componente>(`./assets/data/menu.json`);
  }
  registrousuario(datos_usuario){
    return this.http.post(`${this.backend}/crear-usuario`,datos_usuario);
  }
  obtenerDatosUsuario(){
    return this.http.get(`${this.backend}/obtener-usuarios`);
  }
  crearViaje(datos_viaje){
    return this.http.post(`${this.backend1}/crear-viaje`,datos_viaje);
  }
  obtenerViaje(){
    return this.http.get(`${this.backend1}/obtener-viajes`);
  }
  obtenerLogin(datos_login){
    return this.http.get(`${this.backend}/obtener-login/${datos_login}`);
  }
}
