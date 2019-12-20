import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewinfoPageRoutingModule } from './overviewinfo-routing.module';

import { OverviewinfoPage } from './overviewinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewinfoPageRoutingModule
  ],
  declarations: [OverviewinfoPage]
})
export class OverviewinfoPageModule {}
