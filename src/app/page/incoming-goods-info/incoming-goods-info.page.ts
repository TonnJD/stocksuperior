import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IncomingGoodsInfoListPage } from '../incoming-goods-info-list/incoming-goods-info-list.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incoming-goods-info',
  templateUrl: './incoming-goods-info.page.html',
  styleUrls: ['./incoming-goods-info.page.scss'],
})
export class IncomingGoodsInfoPage implements OnInit {
  No = 0;
  Unit = "Pcs"
  list = [];
  item;
  myId;
  type

  constructor(public modalController: ModalController,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.myId = JSON.parse(params["data"]);
      this.type = this.myId.type
      console.log(this.myId);

      if (this.type == 'new') {
        console.log(this.type);

      } else if (this.type == 'edit') {
        console.log(this.type);

      }

    });
  }

  ngOnInit() {
  }
  Save() {

  }
  onChange() {

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
}
