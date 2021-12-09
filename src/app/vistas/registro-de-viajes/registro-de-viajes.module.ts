import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeViajesPageRoutingModule } from './registro-de-viajes-routing.module';

import { RegistroDeViajesPage } from './registro-de-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDeViajesPageRoutingModule
  ],
  declarations: [RegistroDeViajesPage]
})
export class RegistroDeViajesPageModule {}
