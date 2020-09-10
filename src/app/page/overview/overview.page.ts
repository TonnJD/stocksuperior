import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import { WebserviceService } from '../../webservice.service';
import { ModalController, NavController } from '@ionic/angular';
import { OverviewinfoPage } from '../overviewinfo/overviewinfo.page';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { Storage } from '@ionic/storage';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { AlertController } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  items;
  empID;
  name;
  username;
  position;
  data;
  device;
  spare;
  type;
  user;
  memid;
  Product;
  ProductList;
  limit;
  list;
  VersionNumber;
  statusversion;
  link;

  constructor(private storageService: StorageService,
    public webservice: WebserviceService,
    private storage: Storage,
    public navCtrl: NavController,
    private router: Router,
    private auth: AuthenticationService,
    public modalController: ModalController,
    private appVersion: AppVersion,
    public alertController: AlertController,
    private browserTab: BrowserTab,) {

      this.ProductList = [];
      
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  ngOnInit() {
    this.checkversion();
    this.getUser();
    this.loadStock();
    this.onChange("69");
  }

  getUser() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        console.log(res);
      }
    })
  }

  loadStock() {
    let Product = {
      Type: "GetProduct",
    }
    this.webservice.Overview(Product).then(Product => {
      this.Product = Product
      console.log(this.Product);
    });
  }

  onChange(item) {
    let Product = {
      Type: "GetProductList",
      ProductTypeID: item
    }
    this.webservice.Overview(Product).then(ProductList => {
      this.list = ProductList
      if (this.list != false) {
        for (let i = 0; i < 35; i++) {
          this.ProductList.push(this.list[i]);
        }
        console.log(this.ProductList);
      }
    });
  }

  View() {
    this.router.navigate(['/overviewinfo']);
  }

  doInfinite(infiniteScroll) {
    if (this.ProductList.length != 0) {
      this.limit = this.ProductList.length;
      setTimeout(() => {
        infiniteScroll.target.complete();
        for (let i = this.limit; i < this.limit + 10; i++) {
          this.ProductList.push(this.list[i]);
        }
      }, 500);
    }
  }

  //#region Check Version
  checkversion() {
    this.appVersion.getVersionNumber().then((s) => {
      this.VersionNumber = s;
      console.log(this.VersionNumber);
      let param = {
        version: this.VersionNumber,
        Type: "checkversion",
      }
      console.log(param);
      this.webservice.Setting(param).then(data => {
        this.statusversion = data;
        console.log(this.statusversion);
  
        if (this.statusversion == true) {
  
        } else {
          this.link = this.statusversion;
          console.log(this.link);
          
          this.alertversion();
        }
      });
    })
  }
  //#endregion

  //#region 
  async alertversion() {
    const alert = await this.alertController.create({
      message: 'กรุณาดาวน์โหลดเวอร์ชั่นใหม่',
      buttons: [
        {
          text: 'ดาวน์โหลดเวอร์ชั่นใหม่',
          handler: () => {
            this.openUrl();
          }
        }, {
          text: 'ยกเลิก',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
  //#endregion

  //#region 
  openUrl() {
    console.log(this.link);
    this.browserTab.isAvailable()
      .then((isAvailable: boolean) => {

        if (isAvailable) {

          this.browserTab.openUrl(this.link);
          //this.browserTab.openUrl('https://test.erpsuperior.com/APK/eServiceTest.apk');
          //this.browserTab.openUrl('https://drive.google.com/file/d/1CYrs3j1akx2gtIXRx3A_DvD8kX9bSsea/view?usp=sharing');

        } else {

          // if custom tabs are not available you may  use InAppBrowser

        }
      });
  }
  //#endregion

}
