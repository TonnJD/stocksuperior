import { Component, OnInit } from '@angular/core';
import { Platform, IonList } from '@ionic/angular';
import { StorageService, User } from '../storage.service';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

    //#region data
    user;
    name;
    //#endregion

  constructor(private platform: Platform,
    private storageService: StorageService,
    private authService: AuthenticationService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

//#region logout
logout() {
  this.storageService.resetLocalStorage();
  console.log("Logout Finish");
  this.authService.logout();
}
//#endregion

}
