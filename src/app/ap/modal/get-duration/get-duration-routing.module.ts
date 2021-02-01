import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDurationPage } from './get-duration.page';

const routes: Routes = [
  {
    path: '',
    component: GetDurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetDurationPageRoutingModule {}
