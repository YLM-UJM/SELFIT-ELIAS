import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesSeancesSavedPage } from './mes-seances-saved.page';

const routes: Routes = [
  {
    path: '',
    component: MesSeancesSavedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesSeancesSavedPageRoutingModule {}
