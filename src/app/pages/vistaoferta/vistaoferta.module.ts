import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaofertaPageRoutingModule } from './vistaoferta-routing.module';

import { VistaofertaPage } from './vistaoferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaofertaPageRoutingModule
  ],
  declarations: [VistaofertaPage]
})
export class VistaofertaPageModule {}
