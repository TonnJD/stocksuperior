import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-stock-info',
  templateUrl: './check-stock-info.page.html',
  styleUrls: ['./check-stock-info.page.scss'],
})
export class CheckStockInfoPage implements OnInit {

  No = 0;
  stock = [];
  myId;
  type

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.myId = JSON.parse(params["data"]);
      this.type = this.myId.type
      console.log(this.myId);

      if (this.type == 'new') {
        console.log(this.type);

      } else if (this.type == 'edit') {
        console.log(this.type);

      }

    });
  }

  ngOnInit() {
  }

  save() {
    this.stock.push(this.No);
    console.log(this.stock);

  }

}
