import {Component, OnInit} from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginService.restoreLogin();
  }

  ngOnInit() {
    // Lắng nghe các thay đổi khi người dùng đăng nhập/đăng xuất, hoặc đăng nhập lại
    this.subcribeLogin();
  }

  logout() {
    this.loginService.logout();
  }

  subcribeLogin() {
    this.loginService.userLogined.subscribe(
      (curentUser) => {
        // Nếu !curentUser: user đăng đăng nhập không tồn tại -> redirect tới login
        if (!curentUser) { this.router.navigate(['login']); }

        // TODO: Nếu người dùng đăng nhập thay đổi
        // -> cập nhật lại các thông tin trên trang
      }
    );
  }
}
