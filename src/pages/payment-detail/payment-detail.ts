import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentSummaryPage } from '../payment-summary/payment-summary';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the PaymentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-detail',
  templateUrl: 'payment-detail.html',
})
export class PaymentDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDetailPage');
  }

  goToSummary(){
    this.navCtrl.push(PaymentSummaryPage);
  }
  scan() {
    console.log("a");
    this.barcodeScanner.scan()
      .then((result) => {
        alert(
          "We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled
        )
      })
      .catch((error) => {
        //alert(error);
      })

  }
}
