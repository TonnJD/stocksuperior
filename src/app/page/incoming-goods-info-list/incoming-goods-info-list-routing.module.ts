import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomingGoodsInfoListPage } from './incoming-goods-info-list.page';

const routes: Routes = [
  {
    path: '',
    component: IncomingGoodsInfoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomingGoodsInfoListPageRoutingModule {}
