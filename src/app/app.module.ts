import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginService} from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
const routerConfig: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'search', component: MainComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot(routerConfig),
    ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [LoginService, HttpClientModule]
})
export class AppModule { }
