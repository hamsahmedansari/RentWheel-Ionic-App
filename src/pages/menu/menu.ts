import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MainHomePage } from '../main-home/main-home';
import { SettingPage } from '../setting/setting';
import { HistoryPage } from '../history/history';
import { InviteFriendsPage } from '../invite-friends/invite-friends';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.homePage = MainHomePage;
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  OpenSettingPage(){
    this.navCtrl.push(SettingPage);
  }
  OpenHistoryPage(){
    this.navCtrl.push(HistoryPage);    
  }
  OpenInviteFriendsPage(){
    this.navCtrl.push(InviteFriendsPage);    
  }
  OpenAboutPage(){
    this.navCtrl.push(AboutPage);    
  }
  Logout(){
    this.navCtrl.setRoot(HomePage);
  }
}
