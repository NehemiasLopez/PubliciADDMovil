import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('../ofertas/ofertas.module').then( m => m.OfertasPageModule)
      },
      {
        path: 'negocios',
        loadChildren: () => import('../negocios/negocios.module').then( m => m.NegociosPageModule)
      },
      {
        path: 'vistanegocio',
        loadChildren: () => import('../vistanegocio/vistanegocio.module').then( m => m.VistanegocioPageModule)
      },
      {
        path: 'cotizaciones',
        loadChildren: () => import('../cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
      },
      {
        path: 'likes',
        loadChildren: () => import('../likes/likes.module').then( m => m.LikesPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'vistaproducto',
        loadChildren: () => import('../vistaproducto/vistaproducto.module').then( m => m.VistaproductoPageModule)
      },
      {
        path: 'vercotizaciones',
        loadChildren: () => import('../vercotizaciones/vercotizaciones.module').then( m => m.VercotizacionesPageModule)
      },
      {
        path: 'vistaoferta',
        loadChildren: () => import('../vistaoferta/vistaoferta.module').then( m => m.VistaofertaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
