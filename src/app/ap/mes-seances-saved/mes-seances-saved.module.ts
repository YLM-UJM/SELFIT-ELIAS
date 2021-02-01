import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesSeancesSavedPageRoutingModule } from './mes-seances-saved-routing.module';

import { MesSeancesSavedPage } from './mes-seances-saved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesSeancesSavedPageRoutingModule
  ],
  declarations: [MesSeancesSavedPage]
})
export class MesSeancesSavedPageModule {}
