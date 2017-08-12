import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaymentSummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-summary',
  templateUrl: 'payment-summary.html',
})
export class PaymentSummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSummaryPage');
  }
  submitRequest(){
    this.app.getRootNav().setRoot(HomePage, {
      isMerchant: true,
      amount : '1.000 IDR',
      sendTo : 'Antonio Ferbatang'
    });
  }
}
