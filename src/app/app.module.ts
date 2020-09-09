import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { WebserviceService } from '../app/webservice.service';
import  { IncomingGoodsInfoListPageModule } from '../app/page/incoming-goods-info-list/incoming-goods-info-list.module';
import {PopuptranferinfoPageModule } from '../app/popuptranferinfo/popuptranferinfo.module';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { ChangpasswordPageModule } from '../app/setting/changpassword/changpassword.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
    [BrowserModule,
      IonicModule.forRoot(),
      IonicStorageModule.forRoot(),
      HttpClientModule,
      IonicModule.forRoot(),
      IncomingGoodsInfoListPageModule,
      PopuptranferinfoPageModule,
      AppRoutingModule,
      ChangpasswordPageModule],

  providers: [
    WebserviceService,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    AppVersion,
    BrowserTab,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
