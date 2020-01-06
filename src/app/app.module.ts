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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
    [BrowserModule,
      IonicModule.forRoot(),
      IonicStorageModule.forRoot(),
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule],


  providers: [
    WebserviceService,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
