import { Component, OnInit, } from '@angular/core';
import { WebserviceService } from '../../webservice.service';
import { NavigationExtras } from '@angular/router';
import { NavController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-asset-location',
  templateUrl: './asset-location.page.html',
  styleUrls: ['./asset-location.page.scss'],
})
export class AssetLocationPage implements OnInit {

  SKU;
  ProductStatus;
  Location;
  SKUID;
  SKUName;
  ProductStatusID;
  LotNo;
  LocationID;
  SkuCode;
  DocNo;
  PRNo;
  Ref;
  AssetLocationList;
  Time = 5;
  asset;
  limit;
  list;

  constructor(private service: WebserviceService,
    public navCtrl: NavController,) {
    this.SKUID = "";
    this.SKUName = "";
    this.ProductStatusID = "";
    this.LotNo = "";
    this.LocationID = "";
    this.SkuCode = "";
    this.DocNo = "";
    this.PRNo = "";
    this.Ref = "";

    this.AssetLocationList = [];
    //this.Search();
  }

  ngOnInit() {
    this.SelectDropdown();
  }

  SelectDropdown() {
    let SKU = {
      Type: "SKU",
    }
    this.service.AssetLocationController(SKU).then(SKU => {
      this.SKU = SKU;
    });

    let ProductStatus = {
      Type: "ProductStatus",
    }
    this.service.AssetLocationController(ProductStatus).then(ProductStatus => {
      this.ProductStatus = ProductStatus;
    });

    let Location = {
      Type: "Location",
    }
    this.service.AssetLocationController(Location).then(Location => {
      this.Location = Location;
    });
    //this.Search();
  }

  Search() {
    this.list = true;

    let AssetLocationList = {
      Type: "AssetLocationList",
      SKUID: this.SKUID, //ประเภทสินค้า
      SKUName: this.SKUName, //ชื่อสินค้า/SKU Name
      ProductStatusID: this.ProductStatusID,
      LotNo: this.LotNo,
      LocationID: this.LocationID,
      SkuCode: this.SkuCode,
      DocNo: this.DocNo,
      PRNo: this.PRNo,
      Ref: this.Ref,
    }

    console.log('AssetLocationList', AssetLocationList);
    

    this.service.AssetLocationController(AssetLocationList).then(AssetLocationList => {
      this.asset = AssetLocationList
      console.log(this.asset.length);

      this.AssetLocationList = [];

      if (this.asset.length == 0) {
        this.list = false;
      }
      else{
        if (this.asset.length > 20) {
          for (let i = 0; i < 20; i++) {
            this.AssetLocationList.push(this.asset[i]);
          }
        }
        else {
          for (let i = 0; i < this.asset.length; i++) {
            this.AssetLocationList.push(this.asset[i]);
          }
          this.list = true;
        }
      }
      console.log(this.list);
            
    });
  }

  Edit(item) {
    let params = {
      item: item,
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(params)
      }
    };
    
    this.navCtrl.navigateForward(['/asset-location-info'], navigationExtras);
  }

  doInfinite(infiniteScroll) {    
    console.log(this.AssetLocationList.length);
      this.limit = this.AssetLocationList.length;
      setTimeout(() => {
        infiniteScroll.target.complete();
        if (this.asset.length != this.limit) {
          for (let i = this.limit; i < this.limit + 10; i++) {
            this.AssetLocationList.push(this.asset[i]);
          }
        }        
      }, 500);
  }

  Reset() {
    this.SKUName = "";
    this.SKUID = "";
    this.ProductStatusID = "";
    this.LotNo = "";
    this.LocationID = "";
    this.SkuCode = "";
    this.DocNo = "";
    this.PRNo = "";
    this.Ref = "";
    this.Search();
  }
}
