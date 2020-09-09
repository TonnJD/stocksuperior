import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangpasswordPage } from './changpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ChangpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangpasswordPageRoutingModule {}
