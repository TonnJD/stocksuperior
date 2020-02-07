import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import { WebserviceService } from '../../webservice.service';
import { ModalController,NavController } from '@ionic/angular';
import { OverviewinfoPage } from '../overviewinfo/overviewinfo.page';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  items;
  empID;
  name;
  username;
  position;
  data;
  device;
  spare;
  type;
  user;
  memid;
  constructor(private storageService: StorageService,
    public webservice: WebserviceService,
    private storage: Storage,
    public navCtrl: NavController,
    private router: Router,
    private auth: AuthenticationService,
    public modalController: ModalController) { 
      setTimeout(() => {
        this.ngOnInit();
      }, 500);

     

    }

 ngOnInit() {
   this.getUser();
    this.loadStock();
  }

  getUser(){
    this.storage.get(TOKEN_KEY).then(res => {
      this.memid = res.id
      this.name = res.name
      this.username = res.username
      this.empID = res.emmID    
      console.log(this.memid);      
    })
  }

  loadStock(){
    // this.DataService.getnew().subscribe(data => {
    //   console.log(data);
    //   this.data = data;
    //   for (let i = 0; i < this.data.length; i++) {
    //     this.header = this.data[i].header;
    //     this.type = this.data[i].type;        
    //   }
    // });
  }

  onChange(item) {
    this.device = "device"
    this.type = "type"
  }

  View() {
    this.router.navigate(['/overviewinfo']);
  }

}
