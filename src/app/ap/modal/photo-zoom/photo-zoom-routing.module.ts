import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoZoomPage } from './photo-zoom.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoZoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoZoomPageRoutingModule {}
