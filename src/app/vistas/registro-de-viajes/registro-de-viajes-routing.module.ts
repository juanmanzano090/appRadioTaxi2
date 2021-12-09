import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDeViajesPage } from './registro-de-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDeViajesPageRoutingModule {}
