import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VercotizacionesPageRoutingModule } from './vercotizaciones-routing.module';

import { VercotizacionesPage } from './vercotizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VercotizacionesPageRoutingModule
  ],
  declarations: [VercotizacionesPage]
})
export class VercotizacionesPageModule {}
