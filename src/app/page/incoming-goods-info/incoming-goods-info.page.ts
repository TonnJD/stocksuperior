import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IncomingGoodsInfoListPage } from '../incoming-goods-info-list/incoming-goods-info-list.page';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../../webservice.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-incoming-goods-info',
  templateUrl: './incoming-goods-info.page.html',
  styleUrls: ['./incoming-goods-info.page.scss'],
})
export class IncomingGoodsInfoPage implements OnInit {
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

  constructor(public modalController: ModalController,
    private barcodeScanner: BarcodeScanner,private route: ActivatedRoute, private webserviceService: WebserviceService) {
    this.route.queryParams.subscribe(params => {
      this.myId = JSON.parse(params["data"]);
      this.type = this.myId.type
      this.item = this.myId.item
      console.log(this.item);

      this.system();
      console.log(this.myId);

      if (this.type == 'new') {
        console.log(this.type);

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

  }

  Save() {

  }
  onChange(value, id) {
    if (id == 'type') {
      this.typeincomeid = value.detail.value
    }
    if (id == 'department') {
      this.departmentid = value.detail.value
    }
    if (id == 'customer') {
      this.customerid = value.detail.value
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
    }else if (item == 'serial') {
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
      // this.list = data
      // this.list = this.list.data
      this.list.push({ Code: data.data, Name: "test" });
      console.log(data);


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
}
