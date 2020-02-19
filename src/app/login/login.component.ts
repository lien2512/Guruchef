import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../models/login';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {Loginresp} from '../models/loginresp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private loginService: LoginService,
    private router: Router

) {
  }

  ngOnInit() {
    this.loginForm = new FormBuilder().group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rememberMe: new FormControl(true)
    });
  }
  get userNameControl() {
    return this.loginForm.controls.userName;
  }
   get passwordControl() {
    return this.loginForm.controls.password;
   }
    get rememberMeControl() {
    return this.loginForm.controls.rememberMe;
    }
  doLogin() {
    if (this.loginForm.pristine) {
      alert('Please fill in the form before submit');
      return;
    } else if (this.loginForm.invalid) {
      alert('please enter the valid informations');
    }

    const loginObj = new Login();
    loginObj.userName = this.userNameControl.value;
    loginObj.password = this.passwordControl.value;

    this.loginService.authenticate(loginObj).subscribe(
      (res: Loginresp) => {
        this.loginService.saveUser(res);
        this.router.navigate(['search']);
      },
    (err) => {
        alert('Login failed');
        console.log(err);
    }
    );

  }
}
