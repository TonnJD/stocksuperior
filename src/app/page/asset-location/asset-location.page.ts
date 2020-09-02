import { Component, OnInit ,} from '@angular/core';
import { WebserviceService } from '../../webservice.service';
import { NavigationExtras } from '@angular/router';
import { NavController,IonInfiniteScroll } from '@ionic/angular';

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
  }

  ngOnInit() {
    this.SelectDropdown();
  }

  SelectDropdown(){
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
    this.Search();
  }

  Search(){
    let AssetLocationList = {
      Type: "AssetLocationList",
      SKUID: this.SKUID,
      SKUName: this.SKUName,
      ProductStatusID: this.ProductStatusID,
      LotNo: this.LotNo,
      LocationID: this.LocationID,
      SkuCode: this.SkuCode,
      DocNo: this.DocNo,
      PRNo: this.PRNo,
      Ref: this.Ref,
    }
    this.service.AssetLocationController(AssetLocationList).then(AssetLocationList => {
      this.AssetLocationList = AssetLocationList;    
    });
  }

  Edit(item){
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
}
