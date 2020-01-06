import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckStockInfoPage } from './check-stock-info.page';

const routes: Routes = [
  {
    path: '',
    component: CheckStockInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckStockInfoPageRoutingModule {}
