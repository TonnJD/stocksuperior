import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckStockPage } from './check-stock.page';

const routes: Routes = [
  {
    path: '',
    component: CheckStockPage
  },
  // {
  //   path: 'check-stock-info',
  //   loadChildren: () => import('./check-stock-info/check-stock-info.module').then( m => m.CheckStockInfoPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckStockPageRoutingModule {}
