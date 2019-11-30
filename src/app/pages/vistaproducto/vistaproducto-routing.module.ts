import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaproductoPage } from './vistaproducto.page';

const routes: Routes = [
  {
    path: '',
    component: VistaproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaproductoPageRoutingModule {}
