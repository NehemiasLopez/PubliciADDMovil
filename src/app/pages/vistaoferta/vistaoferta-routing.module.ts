import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaofertaPage } from './vistaoferta.page';

const routes: Routes = [
  {
    path: '',
    component: VistaofertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaofertaPageRoutingModule {}
