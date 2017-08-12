import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PaymentTabsPage} from '../pages/payment-tabs/payment-tabs';
import { ConfirmationTabsPage } from '../pages/confirmation-tabs/confirmation-tabs';

import { NotificationService } from '../providers/notification-service/notification-service';

import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public fcm: FCM, private notificationService: NotificationService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
       { title: 'Dashboard', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Payment Request', component: PaymentTabsPage },
      { title: 'Payment Confirmation', component: ConfirmationTabsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.fcm.getToken().then(token=>{
        // TODO : Call service to register token
        // backend.registerToken(token);
        console.log('token from fcm : ' + token)
        this.registerToken({ CashTag: '$buyer', Token: token })
      })
      
      this.fcm.onNotification().subscribe(data=>{
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      })
      
      this.fcm.onTokenRefresh().subscribe(token=>{
        // TODO : Call service to register token
        // backend.registerToken(token);
        console.log('token from fcm : ' + token)
        this.registerToken({ CashTag: '$buyer', Token: token })
      })
    });
  }

  registerToken(token: any) {
    this.notificationService.registerToken(token);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
