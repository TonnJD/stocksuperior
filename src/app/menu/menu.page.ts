import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pagestock = [
    {
      title: 'ภาพรวม',
      url: '/menu/overview',
      icon: 'home'
    },
    {
      title: 'ทะเบียนสินค้ารายชิ้น',
      url: '/menu/asset-location',
      icon: 'cube'
    },
    // {
    //   title: 'เช็คสต็อก',
    //   url: '/menu/check-stock',
    //   icon: 'cube'
    // },
    // {
    //   title: 'รับสินค้าข้าระบบ',
    //   url: '/menu/incoming-goods',
    //   icon: 'albums'
    // },
    // {
    //   title: 'โอนสินค้า',
    //   url: '/menu/tranfer',
    //   icon: 'repeat'
    // },
    {
      title: 'ตั้งค่า',
      url: '/menu/setting',
      icon: 'settings'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
