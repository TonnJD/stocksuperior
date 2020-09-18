import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../../webservice.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asset-location-info',
  templateUrl: './asset-location-info.page.html',
  styleUrls: ['./asset-location-info.page.scss'],
})
export class AssetLocationInfoPage implements OnInit {
  datas;
  AssetLocationInfo;
  OrderItemID;
  ProductTypeID;
  LocationID;
  OrderID;
  SKUID;
  LotNo;
  ProductStatusID;
  ExpDate;
  MfgDate;
  PurchaseOrderID;
  SKUCode;
  ProductName;
  BrandName;
  ProductStatus;
  CountAmount;
  CountSerial;
  SerialNo;
  ProductTypeName;
  CountList;
  AssetID;
  AssetNo;
  Description;
  Serial;

  constructor(private route: ActivatedRoute,
    private service: WebserviceService,
    private barcodeScanner: BarcodeScanner,
    private alertController: AlertController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datas = JSON.parse(params["data"]);
      this.OrderItemID = this.datas.item.OrderItemID;
      this.ProductTypeID = this.datas.item.ProductTypeID;
      this.ProductTypeName = this.datas.item.ProductTypeName;
      this.LocationID = this.datas.item.LocationID;
      this.OrderID = this.datas.item.OrderID;
      this.SKUID = this.datas.item.SKUID;
      this.LotNo = this.datas.item.LotNo;
      this.ProductStatusID = this.datas.item.ProductStatusID;
      this.ExpDate = this.datas.item.ExpDate;
      this.MfgDate = this.datas.item.MfgDate;
      this.PurchaseOrderID = this.datas.item.PurchaseOrderID;
      this.ProductName = this.datas.item.ProductName;
      this.SKUCode = this.datas.item.SKUCode;
      this.BrandName = this.datas.item.BrandName;
      this.ProductStatus = this.datas.item.ProductStatus;
      this.MfgDate = this.datas.item.MfgDate;

      this.GetAmount();
      this.SelectGridAssetLocationInfo();

    });

    this.AssetID = "";
    this.SerialNo = "";
    this.AssetNo = "";
  }

  GetAmount() {
    let CountList = {
      Type: "GetAmount",
      OrderItemID: this.OrderItemID,
      ProductTypeID: this.ProductTypeID,
      LocationID: this.LocationID,
      OrderID: this.OrderID,
      PurchaseOrderID: this.PurchaseOrderID,
      SKUID: this.SKUID,
      LotNo: this.LotNo,
      ProductStatusID: this.ProductStatusID
    }

    this.service.AssetLocationController(CountList).then(CountList => {
      this.CountList = CountList;
      for (let i = 0; i < this.CountList.length; i++) {
        this.CountAmount = this.CountList[i].Amount;
        this.CountSerial = this.CountList[i].Serial;
      }
    });
  }

  SelectGridAssetLocationInfo() {
    let GridAssetLocationInfo = {
      Type: "SelectGridAssetLocationInfo",
      OrderItemID: this.OrderItemID,
      ProductTypeID: this.ProductTypeID,
      LocationID: this.LocationID,
      OrderID: this.OrderID,
      PurchaseOrderID: this.PurchaseOrderID,
      SKUID: this.SKUID,
      Lot: this.LotNo,
      ProductStatusID: this.ProductStatusID
    }

    this.service.AssetLocationController(GridAssetLocationInfo).then(GridAssetLocationInfo => {
      this.AssetLocationInfo = GridAssetLocationInfo;
    });
  }

  Scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      let barcode = barcodeData;
      this.Serial = barcode.text;
      if (this.Serial != null || this.Serial != "") {
        this.SerialNo = this.Serial;
        this.SaveAssetLocationInfo();
      }
    })
    // if (this.Serial != null) {
    //   this.SaveAssetLocationInfo();
    // }
  }

  Save(){    
    if (this.Serial == "") {
      this.alertNot();
    }else{
      this.SerialNo = this.Serial;
      this.SaveAssetLocationInfo();
    }
  }
  SaveAssetLocationInfo() {
    if (this.CountSerial == this.CountAmount && this.AssetID == "") {
      this.alertNotSerial();
    } else {
      let AssetLocationInfo = {
        Type: "SaveAssetLocationInfo",
        AssetID: this.AssetID,
        SerialNo: this.SerialNo,
        AssetNo: this.AssetNo,
        RefNo1: "",
        RefNo2: "",
        Description: this.Description,
        OrderItemID: this.OrderItemID,
        ProductTypeID: this.ProductTypeID,
        LocationID: this.LocationID,
        OrderID: this.OrderID,
        PurchaseOrderID: this.PurchaseOrderID,
        SKUID: this.SKUID,
        Lot: this.LotNo,
        ProductStatusID: this.ProductStatusID
      }
      console.log(AssetLocationInfo);

      this.service.AssetLocationController(AssetLocationInfo).then(Status => {
        console.log(Status);
        if (Status == true) {
          this.SelectGridAssetLocationInfo();
          this.GetAmount();
          this.AssetID = "";
          this.Serial = "";
        } else {
          this.alertMeanSerial();
        }
      });
    }
  }


  Edit(item) {
    console.log(item);
    this.AssetID = item.AssetID
    this.SerialNo = item.SerialNo;
    this.AssetNo = item.AssetNo;
    this.Description = item.Description;
    this.SaveAssetLocationInfo();
  }

  async alertMeanSerial() {
    const alert = await this.alertController.create({
      message: 'Serial No หรือ Asset No นี้มีในระบบแล้ว',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertNot() {
    const alert = await this.alertController.create({
      message: 'กรุณากรอก Serial',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertNotSerial() {
    const alert = await this.alertController.create({
      message: 'ไม่สามารถเพิ่มข้อมูล Serial ได้อีก เนื่องจากจำนวน Serial กับ จำนวนสินค้า เท่ากันแล้ว!',
      buttons: ['OK']
    });
    await alert.present();
  }

  close(){
    this.AssetID = "";
  }

  Delete(AssetID)
  {
    let DeleteInfo = {
      Type: "DeleteAssetInfo",
      AssetID: AssetID
    }
    console.log(DeleteInfo);

    this.service.AssetLocationController(DeleteInfo).then(Status => {
      console.log(Status);
      if (Status == true) {
        this.SelectGridAssetLocationInfo();
        this.GetAmount();
        this.AssetID = "";
        this.Serial = "";
      } else {

      }
    });
  }

}
