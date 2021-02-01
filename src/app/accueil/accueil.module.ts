import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { NgxGaugeModule } from 'ngx-gauge';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    NgxGaugeModule,
    ChartsModule
  ],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
