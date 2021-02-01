import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WemwbsPageRoutingModule } from './wemwbs-routing.module';

import { WemwbsPage } from './wemwbs.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WemwbsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WemwbsPage]
})
export class WemwbsPageModule {}
