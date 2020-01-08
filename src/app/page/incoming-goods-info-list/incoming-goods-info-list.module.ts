import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomingGoodsInfoListPageRoutingModule } from './incoming-goods-info-list-routing.module';

import { IncomingGoodsInfoListPage } from './incoming-goods-info-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomingGoodsInfoListPageRoutingModule
  ],
  declarations: [IncomingGoodsInfoListPage]
})
export class IncomingGoodsInfoListPageModule {}
