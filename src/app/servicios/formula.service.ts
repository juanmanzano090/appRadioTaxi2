import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http: HttpClient) { }

  obtenerOpts(){
    return this.http.get<Componente>(`./assets/data/menu.json`);
  }
}
