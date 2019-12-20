import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckStockPage } from './check-stock.page';

const routes: Routes = [
  {
    path: '',
    component: CheckStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckStockPageRoutingModule {}
