import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnairesPageRoutingModule } from './questionnaires-routing.module';

import { QuestionnairesPage } from './questionnaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnairesPageRoutingModule
  ],
  declarations: [QuestionnairesPage]
})
export class QuestionnairesPageModule {}
