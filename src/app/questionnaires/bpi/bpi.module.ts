import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BpiPageRoutingModule } from './bpi-routing.module';

import { BpiPage } from './bpi.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BpiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BpiPage]
})
export class BpiPageModule {}
