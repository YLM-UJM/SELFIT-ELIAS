import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APPage } from './ap.page';

const routes: Routes = [
  {
    path: '',
    component: APPage
  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'info-bloc',
    loadChildren: () => import('./modal/info-bloc/info-bloc.module').then( m => m.InfoBlocPageModule)
  },
  {
    path: 'photo-zoom',
    loadChildren: () => import('./modal/photo-zoom/photo-zoom.module').then( m => m.PhotoZoomPageModule)
  },
  {
    path: 'do-seance',
    loadChildren: () => import('./do-seance/do-seance.module').then( m => m.DoSeancePageModule)
  },
  {
    path: 'feedback-seance',
    loadChildren: () => import('./modal/feedback-seance/feedback-seance.module').then( m => m.FeedbackSeancePageModule)
  },
  {
    path: 'get-duration',
    loadChildren: () => import('./modal/get-duration/get-duration.module').then( m => m.GetDurationPageModule)
  },
  {
    path: 'mes-seances-saved',
    loadChildren: () => import('./mes-seances-saved/mes-seances-saved.module').then( m => m.MesSeancesSavedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class APPageRoutingModule {}
