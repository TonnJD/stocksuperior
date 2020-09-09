import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangpasswordPageRoutingModule } from './changpassword-routing.module';

import { ChangpasswordPage } from './changpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangpasswordPageRoutingModule
  ],
  declarations: [ChangpasswordPage]
})
export class ChangpasswordPageModule {}
