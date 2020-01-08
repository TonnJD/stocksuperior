import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-incoming-goods',
  templateUrl: './incoming-goods.page.html',
  styleUrls: ['./incoming-goods.page.scss'],
})
export class IncomingGoodsPage implements OnInit {
  No = 1;
  stock = [];

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {
    let a = "a"
    this.stock.push(a);
    console.log(this.stock);

  }

  
  Edit(type) {
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
