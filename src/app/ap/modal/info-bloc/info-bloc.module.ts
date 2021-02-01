import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoBlocPageRoutingModule } from './info-bloc-routing.module';

import { InfoBlocPage } from './info-bloc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoBlocPageRoutingModule
  ],
  declarations: [InfoBlocPage]
})
export class InfoBlocPageModule {}
