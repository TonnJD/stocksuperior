import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-stock-info',
  templateUrl: './check-stock-info.page.html',
  styleUrls: ['./check-stock-info.page.scss'],
})
export class CheckStockInfoPage implements OnInit {

  No = 1;
  stock = [];

  
  constructor() { }

  ngOnInit() {
  }

  save() {
    this.stock.push(this.No);
    console.log(this.stock);

  }

}
