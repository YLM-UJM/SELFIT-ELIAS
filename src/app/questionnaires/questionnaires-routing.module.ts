import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnairesPage } from './questionnaires.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairesPage
  },
  {
    path: 'sf12',
    loadChildren: () => import('./sf12/sf12.module').then( m => m.Sf12PageModule)
  },
  {
    path: 'facit',
    loadChildren: () => import('./facit/facit.module').then( m => m.FacitPageModule)
  },
  {
    path: 'wemwbs',
    loadChildren: () => import('./wemwbs/wemwbs.module').then( m => m.WemwbsPageModule)
  },
  {
    path: 'cesd',
    loadChildren: () => import('./cesd/cesd.module').then( m => m.CesdPageModule)
  },
  {
    path: 'isi',
    loadChildren: () => import('./isi/isi.module').then( m => m.IsiPageModule)
  },
  {
    path: 'bpi',
    loadChildren: () => import('./bpi/bpi.module').then( m => m.BpiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnairesPageRoutingModule {}
