import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewinfoPage } from './overviewinfo.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewinfoPageRoutingModule {}
