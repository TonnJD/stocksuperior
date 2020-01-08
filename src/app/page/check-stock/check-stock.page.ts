import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-check-stock',
  templateUrl: './check-stock.page.html',
  styleUrls: ['./check-stock.page.scss'],
})
export class CheckStockPage implements OnInit {
  No = 1;
  stock = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit(type) {
    if (type == 'new') {
      let params = {
        type: "new",
      }

      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: JSON.stringify(params)
        }
      };

      this.router.navigate(['/check-stock-info'], navigationExtras);

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

      this.router.navigate(['/check-stock-info'], navigationExtras);
    }
  }

  delete() {

  }
}
