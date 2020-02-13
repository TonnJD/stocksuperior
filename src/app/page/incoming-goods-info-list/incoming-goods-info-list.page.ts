import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WebserviceService } from '../../webservice.service';

@Component({
  selector: 'app-incoming-goods-info-list',
  templateUrl: './incoming-goods-info-list.page.html',
  styleUrls: ['./incoming-goods-info-list.page.scss'],
})
export class IncomingGoodsInfoListPage implements OnInit {
  list;
  listsku = [];
  constructor(private modalController: ModalController,
    private webserviceService: WebserviceService) {
    this.selectsku();
  }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss(0);
  }
  async addItem(item) {
    this.listsku.push({
      SKUID: item.SKUID,
      SKUCode: item.SKUCode,
      Name: item.Name,
      ProductTypeID: item.ProductTypeID,
      VenderID: item.VenderID,
      CustomerID: item.CustomerID,
      ModelName: item.ModelName,
      BrandName: item.BrandName,
      ProductCode: item.ProductCode,
      ProductType: item.ProductType
    })
    await this.modalController.dismiss(this.listsku);
  }

  selectsku() {
    let selectsku = {
      type: "selectsku"
    }
    this.webserviceService.incoming(selectsku).then(list => {
      this.list = list;
      console.log(this.list); 
    });
  }
}
