import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  
  Edit() {
    this.router.navigate(['/incoming-goods-info']);
  }
}
