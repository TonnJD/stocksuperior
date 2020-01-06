import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckStockInfoPageRoutingModule } from './check-stock-info-routing.module';

import { CheckStockInfoPage } from './check-stock-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckStockInfoPageRoutingModule
  ],
  declarations: [CheckStockInfoPage]
})
export class CheckStockInfoPageModule {}
