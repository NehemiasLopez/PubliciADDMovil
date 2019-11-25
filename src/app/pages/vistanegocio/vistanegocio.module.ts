import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistanegocioPageRoutingModule } from './vistanegocio-routing.module';

import { VistanegocioPage } from './vistanegocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistanegocioPageRoutingModule
  ],
  declarations: [VistanegocioPage]
})
export class VistanegocioPageModule {}
