import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetLocationInfoPageRoutingModule } from './asset-location-info-routing.module';

import { AssetLocationInfoPage } from './asset-location-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetLocationInfoPageRoutingModule
  ],
  declarations: [AssetLocationInfoPage]
})
export class AssetLocationInfoPageModule {}
