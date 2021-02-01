import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CesdPageRoutingModule } from './cesd-routing.module';

import { CesdPage } from './cesd.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CesdPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CesdPage]
})
export class CesdPageModule {}
