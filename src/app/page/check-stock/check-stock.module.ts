import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckStockPageRoutingModule } from './check-stock-routing.module';

import { CheckStockPage } from './check-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckStockPageRoutingModule
  ],
  declarations: [CheckStockPage]
})
export class CheckStockPageModule {}
