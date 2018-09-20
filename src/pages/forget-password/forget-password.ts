import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PinVerificationPage } from '../pin-verification/pin-verification';

@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }
  // OpenHomePage(){
  //   this.navCtrl.push(HomePage);
  // }
  OpenPinVerification(){
    this.navCtrl.push(PinVerificationPage,{'CurrentPage':ForgetPasswordPage});    
  }
}
