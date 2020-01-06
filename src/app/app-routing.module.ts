import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'overviewinfo',
    loadChildren: () => import('./page/overviewinfo/overviewinfo.module').then( m => m.OverviewinfoPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'check-stock-info',
    loadChildren: () => import('./page/check-stock-info/check-stock-info.module').then( m => m.CheckStockInfoPageModule)
  },
  {
    path: 'incoming-goods-info',
    loadChildren: () => import('./page/incoming-goods-info/incoming-goods-info.module').then( m => m.IncomingGoodsInfoPageModule)
  },
  {
    path: 'tranfer-info',
    loadChildren: () => import('./page/tranfer-info/tranfer-info.module').then( m => m.TranferInfoPageModule)
  },
  // {
  //   path: 'overview',
  //   loadChildren: () => import('./page/overview/overview.module').then( m => m.OverviewPageModule)
  // },
  // {
  //   path: 'check-stock',
  //   loadChildren: () => import('./page/check-stock/check-stock.module').then( m => m.CheckStockPageModule)
  // },
  // {
  //   path: 'incoming-goods',
  //   loadChildren: () => import('./page/incoming-goods/incoming-goods.module').then( m => m.IncomingGoodsPageModule)
  // },
  // {
  //   path: 'tranfer',
  //   loadChildren: () => import('./page/tranfer/tranfer.module').then( m => m.TranferPageModule)
  // },
  // {
  //   path: 'setting',
  //   loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
