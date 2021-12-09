import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeUsuarioPageRoutingModule } from './registro-de-usuario-routing.module';

import { RegistroDeUsuarioPage } from './registro-de-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDeUsuarioPageRoutingModule
  ],
  declarations: [RegistroDeUsuarioPage]
})
export class RegistroDeUsuarioPageModule {}
