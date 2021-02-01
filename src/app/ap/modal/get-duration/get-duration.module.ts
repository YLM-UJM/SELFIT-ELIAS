import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetDurationPageRoutingModule } from './get-duration-routing.module';

import { GetDurationPage } from './get-duration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetDurationPageRoutingModule
  ],
  declarations: [GetDurationPage]
})
export class GetDurationPageModule {}
