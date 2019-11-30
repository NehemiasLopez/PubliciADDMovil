import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaproductoPageRoutingModule } from './vistaproducto-routing.module';

import { VistaproductoPage } from './vistaproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaproductoPageRoutingModule
  ],
  declarations: [VistaproductoPage]
})
export class VistaproductoPageModule {}
