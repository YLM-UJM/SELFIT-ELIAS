import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sf12PageRoutingModule } from './sf12-routing.module';

import { Sf12Page } from './sf12.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sf12PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Sf12Page]
})
export class Sf12PageModule {}
