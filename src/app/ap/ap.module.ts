import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { APPageRoutingModule } from './ap-routing.module';

import { APPage } from './ap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    APPageRoutingModule
  ],
  declarations: [APPage]
})
export class APPageModule {}
