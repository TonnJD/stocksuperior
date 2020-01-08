import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform, IonList, LoadingController, NavController } from '@ionic/angular';
import { StorageService, User } from '../storage.service';
import { WebserviceService } from '../webservice.service';
import { AuthenticationService } from '../auth/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name;
  username;
  position;
  empID;
  workall;
  workfinish;
  data;
  user;
  status;
  role;
  items: User[] = [];
  newUser: User = <User>{};
  newtest;

  @ViewChild('mylist', { static: false }) mylist: IonList;

  constructor(private webservice: WebserviceService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    private platform: Platform,
    private auth: AuthenticationService,
    private storageService: StorageService) {

    setTimeout(() => {
      this.ngOnInit();
    }, 500);

    this.user = [];
  }

  //#region load
  async load() {
    const loading = await this.loadingController.create({
      message: 'กำลังเข้าสู่ระบบ...',
      duration: 500,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  //#endregion

  //#region login
  login() {
    this.load();
    this.user.email = this.user.email;
    this.user.password = this.user.password;
    this.user.type = "Stock";
    this.webservice.login(this.user).then(data => {
      this.data = data;
      console.log('Data Returner', this.data);
      for (let i = 0; i < this.data.length; i++) {
        this.status = this.data[i].Status;
        this.name = this.data[i].Name;
        this.username = this.data[i].Username;
        this.position = this.data[i].Position;
        this.workall = this.data[i].WorkAll;
        this.workfinish = this.data[i].WorkFinish;
        this.empID = this.data[i].empID;
        this.role = this.data[i].roleID;
      }
      if (this.status == false) {
        this.false();
      }
      else if (this.status == true) {
        this.true();
      }
    });
  }
  //#endregion

  //#region check  
  async false() {
    const alert = await this.alertController.create({
      message: 'อีเมลล์ หรือ รหัสผ่านไม่ถูกต้อง',
      buttons: ['OK']
    });
    await alert.present();
    this.storageService.resetLocalStorage();
  }
  true() {
    this.newUser.id = 1;
    this.newUser.name = this.name;
    this.newUser.username = this.username;
    this.newUser.position = this.position;
    this.newUser.empID = this.empID;
    this.newUser.role = this.role;
    this.newUser.status = this.status;
    this.auth.login(this.newUser);
  }

  //#endregion
  ngOnInit() {
    this.storageService.resetLocalStorage();
  }

}
