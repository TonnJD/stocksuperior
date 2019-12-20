import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OverviewPage } from './overview.page';

import { OverviewPageRoutingModule } from './overview-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {}
