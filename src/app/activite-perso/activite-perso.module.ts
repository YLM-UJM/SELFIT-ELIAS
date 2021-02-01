import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitePersoPageRoutingModule } from './activite-perso-routing.module';

import { ActivitePersoPage } from './activite-perso.page';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitePersoPageRoutingModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  declarations: [ActivitePersoPage]
})
export class ActivitePersoPageModule {}
