import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentSummaryPage } from '../payment-summary/payment-summary';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the RequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  public cashtag: string;
   public amount: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    this.cashtag = "$";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

  goToSummary() {
    this.navCtrl.push(PaymentSummaryPage);
  }
  OnCashtagChange() {
    //this.cashtag.replace("$", "");
    //    if (this.cashtag.includes("$",0)){
    // this.cashtag.replace("$","");
    //   this.cashtag = "$"+this.cashtag;} else
    if (this.cashtag.length == 0) { this.cashtag = "$"; }
    else if (!this.cashtag.includes("$", 0)) { this.cashtag = "$" + this.cashtag; }
  }

  OnAmountChange(){
    if (this.amount < 0) { this.amount = 0}
    else if(this.amount.toString().includes(" ",0)){this.amount = this.amount;}
    else if(this.amount.toString().includes("-",0)){this.amount = this.amount;}
    else if(!this.amount.toString().includes(",",0)){this.amount = this.amount;}
    else if(!this.amount.toString().includes(".",0)){this.amount = this.amount;}
  }

  scan() {
    console.log("a");
    this.barcodeScanner.scan()
      .then((result) => {
        this.cashtag = result.text;
      })
      .catch((error) => {
        alert(error);
      })

  }
}
