import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomingGoodsInfoPage } from './incoming-goods-info.page';

const routes: Routes = [
  {
    path: '',
    component: IncomingGoodsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomingGoodsInfoPageRoutingModule {}
