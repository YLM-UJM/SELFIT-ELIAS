import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackSeancePage } from './feedback-seance.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackSeancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackSeancePageRoutingModule {}
