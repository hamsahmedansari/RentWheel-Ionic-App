import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { MenuPage } from '../pages/menu/menu';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { PinVerificationPage } from '../pages/pin-verification/pin-verification';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { MainHomePage } from '../pages/main-home/main-home';
import { SettingPage } from '../pages/setting/setting';
import { HistoryPage } from '../pages/history/history';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { AboutPage } from '../pages/about/about';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ForgetPasswordPage,
    PinVerificationPage,
    SignUpPage,
    MainHomePage,
    SettingPage,
    HistoryPage,
    InviteFriendsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ForgetPasswordPage,
    PinVerificationPage,
    SignUpPage,
    MainHomePage,
    SettingPage,
    HistoryPage,
    InviteFriendsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
