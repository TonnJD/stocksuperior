import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import { WebserviceService } from '../../webservice.service';
import { ModalController, NavController } from '@ionic/angular';
import { OverviewinfoPage } from '../overviewinfo/overviewinfo.page';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { Storage } from '@ionic/storage';
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

  constructor(private storageService: StorageService,
    public webservice: WebserviceService,
    private storage: Storage,
    public navCtrl: NavController,
    private router: Router,
    private auth: AuthenticationService,
    public modalController: ModalController) {

      this.ProductList = [];
      
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  ngOnInit() {
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
}
