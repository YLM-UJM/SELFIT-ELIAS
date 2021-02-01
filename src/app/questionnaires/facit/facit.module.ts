import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacitPageRoutingModule } from './facit-routing.module';

import { FacitPage } from './facit.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FacitPage]
})
export class FacitPageModule {}
