import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoZoomPageRoutingModule } from './photo-zoom-routing.module';

import { PhotoZoomPage } from './photo-zoom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoZoomPageRoutingModule
  ],
  declarations: [PhotoZoomPage]
})
export class PhotoZoomPageModule {}
