import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/overview',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('../page/overview/overview.module').then( m => m.OverviewPageModule)
      },{
        path: 'check-stock',
    loadChildren: () => import('../page/check-stock/check-stock.module').then( m => m.CheckStockPageModule)
      },{
        path: 'incoming-goods',
    loadChildren: () => import('../page/incoming-goods/incoming-goods.module').then( m => m.IncomingGoodsPageModule)
      },{
        path: 'tranfer',
        loadChildren: () => import('../page/tranfer/tranfer.module').then( m => m.TranferPageModule)      
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
