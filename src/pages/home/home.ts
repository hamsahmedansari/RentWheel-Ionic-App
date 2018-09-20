import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { ForgetPasswordPage } from '../forget-password/forget-password';
import { SignUpPage } from '../sign-up/sign-up';
import { MainHomePage } from '../main-home/main-home';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  // ionViewDidEnter() {
  //   this.menu.swipeEnable(false);
  // }

  // ionViewWillLeave() {
  //   this.menu.swipeEnable(true);
  // }
  OpenForgetPage(){
    this.navCtrl.push(ForgetPasswordPage);
  }
  OpenSignUp(){
    this.navCtrl.push(SignUpPage);
  }
  OpenMainHomePage(){
    this.navCtrl.setRoot(MenuPage);
  }
}
