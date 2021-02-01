import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametresPage } from './parametres.page';

const routes: Routes = [
  {
    path: '',
    component: ParametresPage
  },
  {
    path: 'materiel',
    loadChildren: () => import('./materiel/materiel.module').then( m => m.MaterielPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametresPageRoutingModule {}
