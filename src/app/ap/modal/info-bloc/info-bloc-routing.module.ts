import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBlocPage } from './info-bloc.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBlocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBlocPageRoutingModule {}
