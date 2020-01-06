import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomingGoodsInfoPageRoutingModule } from './incoming-goods-info-routing.module';

import { IncomingGoodsInfoPage } from './incoming-goods-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomingGoodsInfoPageRoutingModule
  ],
  declarations: [IncomingGoodsInfoPage]
})
export class IncomingGoodsInfoPageModule {}
