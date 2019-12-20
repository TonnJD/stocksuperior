import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomingGoodsPageRoutingModule } from './incoming-goods-routing.module';

import { IncomingGoodsPage } from './incoming-goods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomingGoodsPageRoutingModule
  ],
  declarations: [IncomingGoodsPage]
})
export class IncomingGoodsPageModule {}
