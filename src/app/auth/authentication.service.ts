import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { StorageService, User } from '../storage.service';

const TOKEN_KEY = 'auth-token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user;
  authenticationState = new BehaviorSubject(false);
  newUser: User = <User>{};
  constructor(private storage: Storage, private plt: Platform,
    private storageService: StorageService) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {       
        this.authenticationState.next(true);       
      }
    })
  }


  login(id) {
    console.log('id',id);    
    return this.storage.set(TOKEN_KEY, id).then(() => {
      this.authenticationState.next(true);
    });
  }


  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
