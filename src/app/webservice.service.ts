import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  
  // apiServer_url = 'http://localhost:6369/';

  apiServer_url = 'https://wmstest.erpsuperior.com';

  constructor(private http: HttpClient) { }

   //#region Server
   login(user) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Login.ashx' + '?email=' + user.email + '&password=' + user.password,
        JSON.stringify(user), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }

  tranfer(form){
    return new Promise((resovle, reject) => {
          let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    
          this.http.post(this.apiServer_url + '/API/Tranfer.asmx/tranfers', JSON.stringify(form), option).subscribe(data => {
            resovle(data);
          }, error => {
            reject(error)
          });
        });
  }

  incoming(form){
    return new Promise((resovle, reject) => {
          let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    
          this.http.post(this.apiServer_url + '/API/Incoming.asmx/incomingpage', JSON.stringify(form), option).subscribe(data => {
            resovle(data);
          }, error => {
            reject(error)
          });
        });
  }

  AssetLocationController(form) {
    return new Promise((resovle, reject) => {
      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/AssetLocation.asmx/assetlocation', JSON.stringify(form), option).subscribe(data => {
        resovle(data);
      }, error => {
        reject(error)
      });
    });
  }
  //#endregion
}
