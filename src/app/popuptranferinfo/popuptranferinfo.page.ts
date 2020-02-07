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
     if (item.Amount == 0) {
       alert("กรอก")
     }else if (item.Amount > item.Qty) {
      alert("เกิน")
     }else{
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
      console.log(this.listpopup);
     }
    console.log(item);   
    
    
  }

  removeItem(index){
    this.listpopup.splice(index, 1);
  }

  async submit(){
    for (let i = 0; i < this.listpopup.length; i++) {
      this.list.push({ 
        AssetNo: this.listpopup[i].AssetNo,
        SKUCode: this.listpopup[i].SKUCode,
        SKUName: this.listpopup[i].SKUName,
        BrandName: this.listpopup[i].BrandName,
        ProductName: this.listpopup[i].ProductName,
        Amount: this.listpopup[i].Amount,
        OldLocationName: this.listpopup[i].OldLocationName,
        LocationName: this.listpopup[i].LocationName,
        OldProductStatusName: this.listpopup[i].OldProductStatusName,
        ProductStatus: this.listpopup[i].ProductStatus,
        ExpDate: this.listpopup[i].ExpDate
      });
    }
    
    console.log(this.list);
    
    await this.modalController.dismiss(this.list);
  }
}
