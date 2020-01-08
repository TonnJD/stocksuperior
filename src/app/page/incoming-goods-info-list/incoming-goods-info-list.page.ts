import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-incoming-goods-info-list',
  templateUrl: './incoming-goods-info-list.page.html',
  styleUrls: ['./incoming-goods-info-list.page.scss'],
})
export class IncomingGoodsInfoListPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss(0);
  }
  async addItem(){
    await this.modalController.dismiss("SPR02");
  }
}
