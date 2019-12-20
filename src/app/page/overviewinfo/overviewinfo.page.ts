import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-overviewinfo',
  templateUrl: './overviewinfo.page.html',
  styleUrls: ['./overviewinfo.page.scss'],
})
export class OverviewinfoPage implements OnInit {
  item;
  constructor(public modalController:ModalController,
    private navParams: NavParams,) {
      this.item = (navParams.get('test'))
      console.log(this.item);
     }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }
}
