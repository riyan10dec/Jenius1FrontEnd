import { NavParams } from 'ionic-angular/es2015';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CustomerPaymentPage } from '../pages/customer-payment/customer-payment';
import { PaymentDetailPage } from '../pages/payment-detail/payment-detail';
import { PaymentSummaryPage } from '../pages/payment-summary/payment-summary';
import { PaymentTabsPage } from '../pages/payment-tabs/payment-tabs';
import { HistoryDetailPage } from '../pages/history-detail/history-detail';
import { ScanQrPage } from '../pages/scan-qr/scan-qr';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CustomerPaymentPage,
    PaymentDetailPage,
    PaymentSummaryPage,
    PaymentTabsPage,
    HistoryDetailPage,
    ScanQrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement : 'top', tabsHideOnSubPages:"true"}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CustomerPaymentPage,
    PaymentDetailPage,
    PaymentSummaryPage,
    PaymentTabsPage,
    HistoryDetailPage,
    ScanQrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavParams,
    BarcodeScanner
  ]
})
export class AppModule {}
