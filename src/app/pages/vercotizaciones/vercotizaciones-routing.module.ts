import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VercotizacionesPage } from './vercotizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: VercotizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VercotizacionesPageRoutingModule {}
