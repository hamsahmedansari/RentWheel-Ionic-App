import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-main-home',
  templateUrl: 'main-home.html',
})
export class MainHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
    this.menu.swipeEnable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainHomePage');
  }

}
