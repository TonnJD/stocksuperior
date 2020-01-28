import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WebserviceService } from '../webservice.service';
@Component({
  selector: 'app-popuptranferinfo',
  templateUrl: './popuptranferinfo.page.html',
  styleUrls: ['./popuptranferinfo.page.scss'],
})
export class PopuptranferinfoPage implements OnInit {
  ListTranferDetail;
list = [];
listpopup = [];
  constructor(private modalController: ModalController,
    private webserviceService:WebserviceService) { }

  ngOnInit() {
    let ListTranferDetail = {
      type: "ListTranferDetail"
    }
    this.webserviceService.tranfer(ListTranferDetail).then(Running => {
      this.ListTranferDetail = Running;
      console.log(this.ListTranferDetail);
    });
  }
  async closeModal() {
    await this.modalController.dismiss(0);
  }

   addItem(item){
    console.log(item);
    
    this.listpopup.push({ 
      RowID:item.RowID, 
      OrderItemID:item.OrderItemID,
      LocationID:item.LocationID,
      LocationName:item.LocationName, 
      OrderNo:item.OrderNo,
      SKUID:item.SKUID,
      SKUCode:item.SKUCode,
      SKUName:item.SKUName,
      LotNo:item.LotNo,
      Amount:item.Amount,
      Qty:item.Qty,
      ProductStatusID:item.ProductStatusID,
      ProductStatus:item.ProductStatus,
      ExpDate:item.ExpDate, 
    });
    
  }

  async submit(){
    console.log(this.listpopup);
    
    await this.modalController.dismiss(this.listpopup);
  }
}
