import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopuptranferinfoPage } from './popuptranferinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PopuptranferinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopuptranferinfoPageRoutingModule {}
