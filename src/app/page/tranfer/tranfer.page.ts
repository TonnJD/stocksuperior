import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.page.html',
  styleUrls: ['./tranfer.page.scss'],
})
export class TranferPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  view(){
    this.router.navigate(['/tranfer-info']);
  }
  
}
