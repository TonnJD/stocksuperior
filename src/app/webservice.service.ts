import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  
  apiLocal_url = 'http://localhost:41649';
  apiServer_url = 'https://cors-anywhere.herokuapp.com/http://superior2.wingplusweb.com/';

  constructor(private http: HttpClient) { }

   //#region Local
  login(user) {
    return new Promise((resovle, reject) => {

      let option: any = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiLocal_url + '/API/Login.ashx' + '?email=' + user.email + '&password=' + user.password + '&type=' + user.type,
        JSON.stringify(user), option).subscribe(data => {
          resovle(data);
        }, error => {
          reject(error)
        });
    });
  }
  //#endregion
}
