import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CesdPage } from './cesd.page';

const routes: Routes = [
  {
    path: '',
    component: CesdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CesdPageRoutingModule {}
