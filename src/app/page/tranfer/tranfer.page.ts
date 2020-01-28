import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { WebserviceService } from '../../webservice.service';

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.page.html',
  styleUrls: ['./tranfer.page.scss'],
})
export class TranferPage implements OnInit {
  list;
  constructor(private router: Router,
    private webserviceService:WebserviceService) { }

  ngOnInit() {
    let params = {
      type: "tranferList",
    }
    this.webserviceService.tranfer(params).then(list => {
    this.list = list;
    console.log(this.list);      
    });
  }

  Edit(type,item){
    if (type == 'new') {
      let params = {
        type: "new",
        item:item
      }
  
      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify(params)
        }
      };
      
      this.router.navigate(['/tranfer-info'],navigationExtras);

    } 
    else if (type == 'edit') {
      let params = {
        type: "edit",
        item:item
      }
  
      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify(params)
        }
      };
      
      this.router.navigate(['/tranfer-info'],navigationExtras);
    }
  }
  
  Delete(){

  }
}
