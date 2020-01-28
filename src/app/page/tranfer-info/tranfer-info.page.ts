import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../../webservice.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { PopuptranferinfoPage } from '../../popuptranferinfo/popuptranferinfo.page';
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
  TechnicianVender;
  EmpID;
  Running;
  run;
  TransferNo;
  TransferDate;
  TransferTime;
  listproduct;
  data;
  detailtranfer = [];

  constructor(private route: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    public modalController: ModalController,
    private webserviceService: WebserviceService) {
    this.route.queryParams.subscribe(params => {  
      this.myId = JSON.parse(params["data"]);  
      this.type = this.myId.type
      this.item = this.myId.item;
      // console.log(this.myId);
      console.log(this.item);  

      if (this.type == 'new') {
        this.systemdata();
        console.log(this.type);        
        let params = {
          type: "tranferInfo",
        }
        this.webserviceService.tranfer(params).then(list => {
          this.list = list;
          console.log(this.list);
        });

      } else if (this.type == 'edit') {
        this.systemdata();
        console.log(this.item.CustomerID);        
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

  //#region tranfertype
systemdata(){
  let tranfertype = {
    type: "tranfertype",
  }
  this.webserviceService.tranfer(tranfertype).then(tranfertype => {
    this.tranfertype = tranfertype;
    // console.log(this.tranfertype);
  });
  let customer = {
    type: "customer"
  }
  this.webserviceService.tranfer(customer).then(customer => {
    this.customer = customer;
    // console.log(this.customer);
  });
  let TechnicianVender = {
    type: "TechnicianVender"
  }
  this.webserviceService.tranfer(TechnicianVender).then(TechnicianVender => {
    this.TechnicianVender = TechnicianVender;
    // console.log(this.TechnicianVender);
  });
  let EmpID = {
    type: "EmpID"
  }
  this.webserviceService.tranfer(EmpID).then(EmpID => {
    this.EmpID = EmpID;
    console.log(this.EmpID);
  });
  let Running = {
    type: "Running"
  }
  this.webserviceService.tranfer(Running).then(Running => {
    this.Running = Running;
    console.log(this.Running);
  });
}
  //#endregion
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
      let Running = {
        type: "Running",
        DocumentTypeID: this.typetran
      }
      this.webserviceService.tranfer(Running).then(Running => {
        this.Running = Running;
        console.log(this.Running);
      });
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
    else if (id == 'run') {
      this.run = value.detail.value
      console.log('run' + this.run);
      let TransferNo = {
        type: "TransferNo",
        TransferNo: this.run,
      }
      this.webserviceService.tranfer(TransferNo).then(TransferNo => {
        this.TransferNo = TransferNo;
        console.log(this.TransferNo);
      });
    }
  }
  delete(index) {
    this.listtranfer.splice(index, 1);
  }
  ngOnInit() {
  }

  save() {
    this.detailtranfer.push({ 
      cusID: this.cus, 
      tranfertype: this.typetran,
      venderID: this.vender,
      empid:this.tech
    })
    let params = {
      type: "savetranfer",
      list: this.listtranfer,
      cus: this.detailtranfer
    }
    this.webserviceService.tranfer(params).then(list => {
      this.producttranfer = list;
      console.log(this.producttranfer);
    });
  }

  async add(){
    const modal = await this.modalController.create({
      component: PopuptranferinfoPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
      }
    });

    modal.onDidDismiss().then(data => {
      this.data = data.data
      console.log(this.data);
      
      for (let i = 0; i < this.data.length; i++) {
        this.listtranfer.push({ 
          RowID: this.data[i].RowID, 
          OrderItemID: this.data[i].OrderItemID,
          LocationID: this.data[i].LocationID,
          LocationName: this.data[i].LocationName, 
          OrderNo: this.data[i].OrderNo,
          SKUID: this.data[i].SKUID,
          SKUCode: this.data[i].SKUCode,
          SKUName: this.data[i].SKUName,
          LotNo: this.data[i].LotNo,
          Amount: this.data[i].Amount,
          Qty: this.data[i].Qty,
          ProductStatusID: this.data[i].ProductStatusID,
          ProductStatus: this.data[i].ProductStatus,
          ExpDate: this.data[i].ExpDate, 
        });
      }     
      
    })

    return await modal.present();
  }
  
}
