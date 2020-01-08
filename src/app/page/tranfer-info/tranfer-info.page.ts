import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tranfer-info',
  templateUrl: './tranfer-info.page.html',
  styleUrls: ['./tranfer-info.page.scss'],
})
export class TranferInfoPage implements OnInit {
  No = 1;
  Ref = 'ref';
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

}
