import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../../webservice.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tranfer-info',
  templateUrl: './tranfer-info.page.html',
  styleUrls: ['./tranfer-info.page.scss'],
})
export class TranferInfoPage implements OnInit {
  assetno;
  serial;
  Ref;
  myId;
  type
  list;
  listtranfer = [];
  producttranfer;
  SerialNo;
  AssetNo;
  SKUCode;
  SKUName;
  BrandName;
  ProductName;
  Amount;
  OldLocationName;
  LocationName;
  OldProductStatusName;
  ProductStatusID;
  ExpDate;
  typetran;
  cus;
  tech;
  vender;
  item;
  customer;
  tranfertype;

  constructor(private route: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    private webserviceService: WebserviceService) {
    this.route.queryParams.subscribe(params => {
      this.myId = JSON.parse(params["data"]);
      this.type = this.myId.type
      this.item = this.myId.item;
      console.log(this.myId);
      console.log(this.item);
      

      if (this.type == 'new') {
        console.log(this.type);        
        let params = {
          type: "tranferInfo",
        }
        this.webserviceService.tranfer(params).then(list => {
          this.list = list;
          console.log(this.list);
        });

      } else if (this.type == 'edit') {
        console.log(this.item.CustomerID);
        let tranfertype = {
          type: "tranfertype",
        }
        this.webserviceService.tranfer(tranfertype).then(tranfertype => {
          this.tranfertype = tranfertype;
          console.log(this.tranfertype);
        });
        let customer = {
          type: "customer",
          id:this.item.TransferID
        }
        this.webserviceService.tranfer(customer).then(customer => {
          this.customer = customer;
          console.log(this.customer);
        });
        let params = {
          type: "tranferInfo",
          id:this.item.TransferID
        }
        this.webserviceService.tranfer(params).then(list => {
          this.list = list;
          console.log(this.list);
        });
      }

    });
  }

  scanserial() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      let barcode = barcodeData
      this.serial = barcode.text
    }).catch(err => {
      console.log('Error', err);
    });
  }

  scanasset() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      let barcode = barcodeData
      this.assetno = barcode.text
    }).catch(err => {
      console.log('Error', err);
    });
  }

  searchserial() {
    let params = {
      type: "getproducttranfer",
      SerialNo: this.serial
    }
    this.webserviceService.tranfer(params).then(list => {
      this.producttranfer = list;
      console.log(this.producttranfer);
    });
    if (this.producttranfer != "undefined" && Array.isArray(this.producttranfer) && this.producttranfer.length != null && this.producttranfer.length > 0) {
      for (let i = 0; i < this.producttranfer.length; i++) {
        this.SerialNo = this.producttranfer[i].SerialNo;
        this.AssetNo = this.producttranfer[i].AssetNo;
        this.SKUCode = this.producttranfer[i].SKUCode;
        this.SKUName = this.producttranfer[i].SKUName;
        this.BrandName = this.producttranfer[i].BrandName;
        this.ProductName = this.producttranfer[i].ProductName;
        this.Amount = this.producttranfer[i].Amount;
        this.OldLocationName = this.producttranfer[i].OldLocationName;
        this.LocationName = this.producttranfer[i].LocationName;
        this.OldProductStatusName = this.producttranfer[i].OldProductStatusName;
        this.ProductStatusID = this.producttranfer[i].ProductStatusID;
        this.ExpDate = this.producttranfer[i].ExpDate;
      }
      this.listtranfer.push(
        {
          SerialNo: this.SerialNo,
          AssetNo: this.AssetNo,
          SKUCode: this.SKUCode,
          SKUName: this.SKUName,
          BrandName: this.BrandName,
          ProductName: this.ProductName,
          Amount: this.Amount,
          OldLocationName: this.OldLocationName,
          LocationName: this.LocationName,
          OldProductStatusName: this.OldProductStatusName,
          ProductStatusID: this.ProductStatusID,
          ExpDate: this.ExpDate
        });
    }
  }

  searchasset() {

  }

  onChange(value, id) {
    if (id == 'type') {
      this.typetran = value.detail.value
      console.log('type' +  this.typetran);
    } else if (id == 'cus') {
      this.cus = value.detail.value
      console.log('cus' + this.cus);
    }else if (id == 'vender') {
      this.vender = value.detail.value
      console.log('vender' + this.vender);
    }else if (id == 'tech') {
      this.tech = value.detail.value
      console.log('tech' + this.tech);
    }
  }
  delete(index) {
    this.listtranfer.splice(index, 1);
  }
  ngOnInit() {
  }

  save() {
    let params = {
      type: "savetranfer",
      SerialNo: this.serial
    }
    this.webserviceService.tranfer(params).then(list => {
      this.producttranfer = list;
      console.log(this.producttranfer);
    });
  }
}
