import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranferInfoPageRoutingModule } from './tranfer-info-routing.module';

import { TranferInfoPage } from './tranfer-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranferInfoPageRoutingModule
  ],
  declarations: [TranferInfoPage]
})
export class TranferInfoPageModule {}
