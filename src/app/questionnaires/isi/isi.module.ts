import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsiPageRoutingModule } from './isi-routing.module';

import { IsiPage } from './isi.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IsiPage]
})
export class IsiPageModule {}
