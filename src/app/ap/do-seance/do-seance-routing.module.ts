import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoSeancePage } from './do-seance.page';

const routes: Routes = [
  {
    path: '',
    component: DoSeancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoSeancePageRoutingModule {}
