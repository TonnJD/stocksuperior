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
        loadChildren: () => import('../page/overview/overview.module').then(m => m.OverviewPageModule)
      }, {
        path: 'check-stock',
        loadChildren: () => import('../page/check-stock/check-stock.module').then(m => m.CheckStockPageModule)
      }, 
      {
        path: 'asset-location',
        loadChildren: () => import('../page/asset-location/asset-location.module').then(m => m.AssetLocationPageModule)
      }, 
      {
        path: 'check-stock-info',
        loadChildren: () => import('../page/check-stock-info/check-stock-info.module').then( m => m.CheckStockInfoPageModule)
      },
      {
        path: 'incoming-goods',
        loadChildren: () => import('../page/incoming-goods/incoming-goods.module').then(m => m.IncomingGoodsPageModule)
      },
      {
        path: 'incoming-goods-info',
        loadChildren: () => import('../page/incoming-goods-info/incoming-goods-info.module').then( m => m.IncomingGoodsInfoPageModule)
      }, 
      {
        path: 'tranfer',
        loadChildren: () => import('../page/tranfer/tranfer.module').then(m => m.TranferPageModule)
      },
      {
        path: 'tranfer-info',
        loadChildren: () => import('../page/tranfer-info/tranfer-info.module').then( m => m.TranferInfoPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
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
export class MenuPageModule { }
