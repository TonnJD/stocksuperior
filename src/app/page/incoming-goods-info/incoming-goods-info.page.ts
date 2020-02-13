import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IncomingGoodsInfoListPage } from '../incoming-goods-info-list/incoming-goods-info-list.page';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../../webservice.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-incoming-goods-info',
  templateUrl: './incoming-goods-info.page.html',
  styleUrls: ['./incoming-goods-info.page.scss'],
})
export class IncomingGoodsInfoPage implements OnInit {
  sku;
  No = 0;
  Unit = "Pcs"
  list = [];
  order;
  item;
  myId;
  type
  myDate;
  typeincome;
  department;
  typeincomeid;
  departmentid;
  customer;
  customerid;
  warehouseid;
  venderid;
  page = 1;
  serial;
  listserial;
  OrderNo;
  cus = [];
  id;
  warehourse;
  vender;

  constructor(public modalController: ModalController,
    private barcodeScanner: BarcodeScanner, private route: ActivatedRoute,
    private storage: Storage,
    private webserviceService: WebserviceService) {
    this.route.queryParams.subscribe(params => {
      this.myId = JSON.parse(params["data"]);
      this.type = this.myId.type
      this.item = this.myId.item
      console.log(this.item);
      this.getUser();
      this.system();
      console.log(this.myId);

      if (this.type == 'new') {
        console.log(this.type);
        let typeincome = {
          type: "runnningCode"
        }
        this.webserviceService.incoming(typeincome).then(order => {
          this.OrderNo = order;
          console.log(this.OrderNo);
        });
      } else if (this.type == 'edit') {
        console.log(this.type);
        let typeincome = {
          type: "order",
          OrderID: this.item.OrderID
        }
        this.webserviceService.incoming(typeincome).then(order => {
          this.order = order;
          console.log(this.order);
          for (let i = 0; i < this.order.length; i++) {
            this.list.push(
              {
                OrderItemID: this.order[i].OrderItemID,
                SKUID: this.order[i].SKUID,
                SKUCode: this.order[i].SKUCode,
                Name: this.order[i].Name,
                PurchaseOrderID: this.order[i].OrdePurchaseOrderIDrItemID,
                PurchaseOrderNo: this.order[i].PurchaseOrderNo,
                LotNo: this.order[i].LotNo,
                Qty: this.order[i].Qty,
                PackageID: this.order[i].PackageID,
                ProductStatusID: this.order[i].ProductStatusID,
                ExpDate: this.order[i].ExpDate,
                Comment: this.order[i].Comment,
              });
          }
          console.log(this.list);
        });
      }
    });
  }

  getUser() {
    this.storage.get(TOKEN_KEY).then(res => {
      console.log(res);
this.id = res.id;
    })
  }

  ngOnInit() {
  }

  system() {
    let typeincome = {
      type: "typeincome"
    }
    this.webserviceService.incoming(typeincome).then(list => {
      this.typeincome = list;
      console.log(this.typeincome);
    });
    let department = {
      type: "department"
    }
    this.webserviceService.incoming(department).then(list => {
      this.department = list;
      console.log(this.department);
    });
    let customer = {
      type: "customer"
    }
    this.webserviceService.incoming(customer).then(list => {
      this.customer = list;
      console.log(this.customer);
    });
    let warehourse = {
      type: "warehourse"
    }
    this.webserviceService.incoming(warehourse).then(list => {
      this.warehourse = list;
      console.log(this.warehourse);
    });
    let vender = {
      type: "vender"
    }
    this.webserviceService.incoming(vender).then(list => {
      this.vender = list;
      console.log(this.vender);
    });

  }

  Save() {
    if (this.type == 'edit') {
      this.cus.push({
        OrderID: this.item.OrderID,
        OrderNo: this.item.OrderNo,
        OrderDateString: this.item.OrderDateString,
        OrderDate: this.item.OrderDate,
        DocumentTypeID: this.item.DocumentTypeID,
        DocumentTypeName: this.item.DocumentTypeName,
        ProcessStatusID: this.item.ProcessStatusID,
        ProcessStatusName: this.item.ProcessStatusName,
        CustomerID: this.item.CustomerID,
        CustomerName: this.item.CustomerName,
        VenderID: this.item.VenderID,
        VenderName: this.item.VenderName,
        RefNo1: this.item.RefNo1,
        Name: this.item.Name
      })
    }
    if (this.type == 'new') {
      this.cus.push({
        OrderID: "RS",
        OrderNo: this.OrderNo,
        OrderDateString: "",
        OrderDate: "",
        DocumentTypeID: this.typeincomeid,
        DocumentTypeName: "",
        ProcessStatusID: "",
        ProcessStatusName: "",
        CustomerID: this.customerid,
        CustomerName: "",
        VenderID: this.venderid,
        warehouse: this.warehouseid,
        department: this.departmentid,
        VenderName: "",
        RefNo1: "",
        Name: this.id
      })
    }
    let customer = {
      type: "save",
      cus: this.cus,
      list: this.list

    }
    this.webserviceService.incoming(customer).then(list => {
      this.customer = list;
      console.log(this.customer);
    });
  }

  onChange(value, id) {
    if (id == 'type') {
      this.typeincomeid = value.detail.value
      console.log(this.typeincomeid);
      
    }
    if (id == 'department') {
      this.departmentid = value.detail.value
    }
    if (id == 'customer') {
      this.customerid = value.detail.value
      console.log(this.customerid);
      
    }
    if (id == 'warehouse') {
      this.warehouseid = value.detail.value
      console.log(this.warehouseid);
    }
    if (id == 'vender') {
      this.venderid = value.detail.value
      console.log(this.venderid);
    }
  }

  onChangePage(item) {
    if (item == 'product') {
      this.page = 1
    } else if (item == 'serial') {
      this.page = 2
    }
  }

  async addList() {
    const modal = await this.modalController.create({
      component: IncomingGoodsInfoListPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
      }
    });

    modal.onDidDismiss().then(data => {
      this.sku = data.data
      console.log(this.sku);
      for (let i = 0; i < this.sku.length; i++) {
        this.list.push(
          {
            SKUID: this.sku[i].SKUID,
            SKUCode: this.sku[i].SKUCode,
            Name: this.sku[i].Name,
            ProductTypeID: this.sku[i].ProductTypeID,
            VenderID: this.sku[i].VenderID,
            CustomerID: this.sku[i].CustomerID,
            ModelName: this.sku[i].ModelName,
            BrandName: this.sku[i].BrandName,
            ProductCode: this.sku[i].ProductCode,
            ProductType: this.sku[i].ProductType
          })
      }
      console.log(this.list);

    })

    return await modal.present();
  }

  remove(index) {
    this.list.splice(index, 1);
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

  addListserial() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      let barcode = barcodeData
      this.serial = barcode.text
      this.listserial.push({ SKUcode: this.serial })
    }).catch(err => {
      console.log('Error', err);
    });
  }

  searchListserial() {

  }
}
