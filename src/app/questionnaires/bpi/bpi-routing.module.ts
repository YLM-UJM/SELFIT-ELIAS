import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpiPage } from './bpi.page';

const routes: Routes = [
  {
    path: '',
    component: BpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpiPageRoutingModule {}
