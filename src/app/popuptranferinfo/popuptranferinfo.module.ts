import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopuptranferinfoPageRoutingModule } from './popuptranferinfo-routing.module';

import { PopuptranferinfoPage } from './popuptranferinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopuptranferinfoPageRoutingModule
  ],
  declarations: [PopuptranferinfoPage]
})
export class PopuptranferinfoPageModule {}
