import { NavParams } from 'ionic-angular/es2015';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CustomerPaymentPage } from '../pages/customer-payment/customer-payment';
import { PaymentSummaryPage } from '../pages/payment-summary/payment-summary';
import { PaymentTabsPage } from '../pages/payment-tabs/payment-tabs';
import { HistoryDetailPage } from '../pages/history-detail/history-detail';
import { ScanQrPage } from '../pages/scan-qr/scan-qr';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { ConfirmationHistoryPage } from '../pages/confirmation-history/confirmation-history';
import { ConfirmationTabsPage } from '../pages/confirmation-tabs/confirmation-tabs';
import { ConfirmationHistoryDetailPage } from '../pages/confirmation-history-detail/confirmation-history-detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { FCM } from '@ionic-native/fcm';
import { NotificationService } from '../providers/notification-service/notification-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CustomerPaymentPage,
    PaymentSummaryPage,
    PaymentTabsPage,
    HistoryDetailPage,
    ScanQrPage,
    ConfirmationTabsPage,
    ConfirmationHistoryDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement : 'top', tabsHideOnSubPages:"true"}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CustomerPaymentPage,
    PaymentSummaryPage,
    PaymentTabsPage,
    HistoryDetailPage,
    ScanQrPage,
    ConfirmationTabsPage,
    ConfirmationHistoryDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavParams,
    BarcodeScanner,
    NotificationService,
    FCM
  ]
})
export class AppModule {}
