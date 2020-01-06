import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import { WebserviceService } from '../../webservice.service';
import { ModalController,NavController } from '@ionic/angular';
import { OverviewinfoPage } from '../overviewinfo/overviewinfo.page';
import { Router } from '@angular/router';

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

  constructor(private storageService: StorageService,
    public webservice: WebserviceService,
    public navCtrl: NavController,
    private router: Router,
    public modalController: ModalController) { 
      setTimeout(() => {
        this.ngOnInit();
      }, 500);

    }

 ngOnInit() {
    this.loadItem();
    this.loadStock();
  }

  loadItem(){
    this.storageService.getUser().then(items => {
      this.items = items;
      console.log(items);
      for (let i = 0; i < this.items.length; i++) {
        this.empID = this.items[i].empID;
        this.name = this.items[i].name
        this.position = this.items[i].position
        this.username = this.items[i].username
        console.log(this.empID,this.name,this.position,this.username);        
      }
    });
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
