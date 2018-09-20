import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-pin-verification',
  templateUrl: 'pin-verification.html',
})
export class PinVerificationPage {

  PerviousPage:Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.PerviousPage = this.navParams.get('CurrentPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinVerificationPage');
  }
  
  OpenMainHomePage(){
    this.navCtrl.setRoot(MenuPage);
  }
}
