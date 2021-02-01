import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoSeancePageRoutingModule } from './do-seance-routing.module';

import { DoSeancePage } from './do-seance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoSeancePageRoutingModule
  ],
  declarations: [DoSeancePage]
})
export class DoSeancePageModule {}
