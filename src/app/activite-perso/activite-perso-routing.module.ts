import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitePersoPage } from './activite-perso.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitePersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitePersoPageRoutingModule {}
