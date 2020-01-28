import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  
  apiLocal_url = 'http://localhost:6369';

  apiServer_url = 'https://cors-anywhere.herokuapp.com/http://wms.wingplusweb.com/';

  constructor(private http: HttpClient) { }

   //#region Local
  // login(user) {
  //   return new Promise((resovle, reject) => {

  //     let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

  //     this.http.post(this.apiLocal_url + '/API/Login.ashx' + '?email=' + user.email + '&password=' + user.password + '&type=' + user.type,
  //       JSON.stringify(user), option).subscribe(data => {
  //         resovle(data);
  //       }, error => {
  //         reject(error)
  //       });
  //   });
  // }

  // tranfer(form){
  //   return new Promise((resovle, reject) => {
  //         let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    
  //         this.http.post(this.apiLocal_url + '/API/Tranfer.asmx/tranfers', JSON.stringify(form), option).subscribe(data => {
  //           resovle(data);
  //         }, error => {
  //           reject(error)
  //         });
  //       });
  // }

  // incoming(form){
  //   return new Promise((resovle, reject) => {
  //         let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    
  //         this.http.post(this.apiLocal_url + '/API/Incoming.asmx/incomingpage', JSON.stringify(form), option).subscribe(data => {
  //           resovle(data);
  //         }, error => {
  //           reject(error)
  //         });
  //       });
  // }
  //#endregion

   //#region Server
   login(user) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiServer_url + '/API/Login.ashx' + '?email=' + user.email + '&password=' + user.password + '&type=' + user.type,
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
  //#endregion
}
