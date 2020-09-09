import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from '@ionic/angular';
import { WebserviceService } from '../../webservice.service';
import { StorageService, User } from '../../storage.service';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-changpassword',
  templateUrl: './changpassword.page.html',
  styleUrls: ['./changpassword.page.scss'],
})
export class ChangpasswordPage implements OnInit {

  pass;
  status;
  memID;
  type;
  items;

  constructor(public modalController: ModalController,
    public alertController: AlertController,
    public service: WebserviceService, 
    private storageService: StorageService,
    private storage: Storage) {
    this.pass = [];
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  ngOnInit() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        console.log(res);
        this.memID = res.id;
      }
    })
  }

  close() {
    this.modalController.dismiss();
  }

  chang(form) {
    console.log(form.value);
  }
  changpass() {
    console.log(this.pass.old);
    console.log(this.pass.new);
    console.log(this.pass.newretry);
    this.pass.old = this.pass.old;
    this.pass.new = this.pass.new;
    this.pass.newretry = this.pass.newretry;
    if (this.pass.new != this.pass.newretry) {
      this.alertFail();
    } else {
      let pass = {
        passold : this.pass.old,
        memID : this.memID,
        passnew : this.pass.new,
        Type : "changpasss"
      }
      console.log(pass);
      this.service.Setting(pass).then(status => {
        this.status = status;
        console.log(this.status);
        if (this.status == false) {
          this.alertFail();
        }else if (this.status == true) {
          this.alertSuccess();
          this.modalController.dismiss();
        }else if (this.status == "not") {
          this.alertPass();
        }
      });      
    }
  }

  async alertPass() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'กรุณากรอกรหัสผ่านที่ไม่ซ้ำกับรหัสเดิม',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertFail() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'รหัสผ่านไม่ถูกต้อง',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertSuccess() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'บันทึกรหัสผ่านสำเร็จ',
      buttons: ['OK']
    });

    await alert.present();
  }
}
