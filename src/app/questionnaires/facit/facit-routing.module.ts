import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacitPage } from './facit.page';

const routes: Routes = [
  {
    path: '',
    component: FacitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacitPageRoutingModule {}
