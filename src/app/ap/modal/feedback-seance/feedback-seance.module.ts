import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackSeancePageRoutingModule } from './feedback-seance-routing.module';

import { FeedbackSeancePage } from './feedback-seance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackSeancePageRoutingModule
  ],
  declarations: [FeedbackSeancePage]
})
export class FeedbackSeancePageModule {}
