import { Injectable } from '@angular/core';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Login, User} from '../models/login';
import {HttpClient} from '@angular/common/http';
import {Loginresp} from '../models/loginresp';
// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class LoginService {


  private userLogined$ = new BehaviorSubject<User>(null);
  public userLogined = this.userLogined$.asObservable();

  constructor(private httpClient: HttpClient) { }

  authenticate(loginObj: Login) {
    const url = 'https://sercurenetcorewebapp.azurewebsites.net/api/LogIn/authenticate';
    return this.httpClient.post<Loginresp>(url, loginObj);
  }

  saveUser(user: Loginresp) {
    localStorage.setItem('username', user.username);
    localStorage.setItem('token', user.token);

    const loginedUser = new User(user.username, user.token);
    this.userLogined$.next(loginedUser);
  }

  get IsLogined() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  restoreLogin() {
    // lưu vào localStorage
    if (localStorage.getItem('token')
      && localStorage.getItem('username')) {
      const userLogined = new User(localStorage.getItem('username'), localStorage.getItem('token'));
      this.userLogined$.next(userLogined);
    }
  }

// đăng xuất xoá tk khỏi local
  logout() {
    this.userLogined$.next(null);
    localStorage.removeItem('token');
  }
}
