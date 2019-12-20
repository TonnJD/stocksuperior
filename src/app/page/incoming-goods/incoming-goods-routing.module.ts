import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomingGoodsPage } from './incoming-goods.page';

const routes: Routes = [
  {
    path: '',
    component: IncomingGoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomingGoodsPageRoutingModule {}
