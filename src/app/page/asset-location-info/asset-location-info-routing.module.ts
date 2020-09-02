import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetLocationInfoPage } from './asset-location-info.page';

const routes: Routes = [
  {
    path: '',
    component: AssetLocationInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetLocationInfoPageRoutingModule {}
