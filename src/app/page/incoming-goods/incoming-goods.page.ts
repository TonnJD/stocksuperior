import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { WebserviceService } from '../../webservice.service';
@Component({
  selector: 'app-incoming-goods',
  templateUrl: './incoming-goods.page.html',
  styleUrls: ['./incoming-goods.page.scss'],
})
export class IncomingGoodsPage implements OnInit {
  No = 1;
  stock = [];
  list;
  
  constructor(private router: Router,
    private webserviceService:WebserviceService) { }

  ngOnInit() {
    let params = {
      type: "incomingList",
    }
    this.webserviceService.incoming(params).then(list => {
    this.list = list;
    console.log(this.list);      
    });
  }

  save() {
    let a = "a"
    this.stock.push(a);
    console.log(this.stock);

  }

  
  Edit(type,item) {
    if (type == 'new') {
      let params = {
        type: "new",
      }
  
      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify(params)
        }
      };
      
      this.router.navigate(['/incoming-goods-info'],navigationExtras);

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
      
      this.router.navigate(['/incoming-goods-info'],navigationExtras);
    }
    
  }

  Delete(){
    
  }
}
