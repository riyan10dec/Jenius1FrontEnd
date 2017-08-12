import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PaymentTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-payment-tabs',
  templateUrl: 'payment-tabs.html'
})
export class PaymentTabsPage {

  requestRoot = 'RequestPage'
  historyRoot = 'HistoryPage'


  constructor(public navCtrl: NavController) {}

}
