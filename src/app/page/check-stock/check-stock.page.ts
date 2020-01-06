import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  edit() {
    
    this.router.navigate(['/check-stock-info']);
  }
}
