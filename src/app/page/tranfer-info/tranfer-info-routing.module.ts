import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranferInfoPage } from './tranfer-info.page';

const routes: Routes = [
  {
    path: '',
    component: TranferInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranferInfoPageRoutingModule {}
