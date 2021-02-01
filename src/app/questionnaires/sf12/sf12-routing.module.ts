import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sf12Page } from './sf12.page';

const routes: Routes = [
  {
    path: '',
    component: Sf12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sf12PageRoutingModule {}
