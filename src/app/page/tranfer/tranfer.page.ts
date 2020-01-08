import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.page.html',
  styleUrls: ['./tranfer.page.scss'],
})
export class TranferPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Edit(type){
    if (type == 'new') {
      let params = {
        type: "new",
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
