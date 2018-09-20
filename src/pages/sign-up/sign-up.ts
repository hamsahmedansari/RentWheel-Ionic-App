import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PinVerificationPage } from '../pin-verification/pin-verification';


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  OpenPinVerification(){
    this.navCtrl.push(PinVerificationPage,{'CurrentPage':SignUpPage});    
  }
}
