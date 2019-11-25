import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistanegocioPage } from './vistanegocio.page';

const routes: Routes = [
  {
    path: '',
    component: VistanegocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistanegocioPageRoutingModule {}
