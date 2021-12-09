import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { FormulaService } from 'src/app/servicios/formula.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente>

  constructor(private formulaService: FormulaService) { }

  ngOnInit() {
    this.componentes = this.formulaService.obtenerOpts();
  }

}
