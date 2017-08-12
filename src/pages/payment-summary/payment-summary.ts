import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { HomePage } from '../home/home';
import {  HomeService} from '../../shared/home.service';

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
  providers: [HomeService],
})
export class PaymentSummaryPage {
  public amount: number;
  public sendTo: string;
  public cashtag:string;
  public transactionID: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private service: HomeService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSummaryPage');
    this.amount = this.navParams.get('amount');
    this.cashtag = this.navParams.get('cashtag');
    this.transactionID = this.makeid();
    this.getName(this.cashtag);
  }
  submitRequest(){
    this.submitReq({
      RequesterUserId: 1,
      RequesterCashTag: "$seller",
      PayerCashTag: this.cashtag,
      Amount: this.amount,
      ReferenceNo: this.transactionID
    });
    this.app.getRootNav().setRoot(HomePage, {
      isMerchant: true,
      amount : this.amount,
      sendTo : this.sendTo
    });
  }
  getName(cashtag: any) {
    return new Promise((resolve, reject) => {
      resolve(this.service.getName(cashtag).subscribe(
      data => {
          this.sendTo = data.name;
      }, 
      errors => {

      }));
    });
  }
  submitReq(data: any){
    return new Promise((resolve, reject) => {
      resolve(this.service.paymentRequest(data).subscribe(
      data => {
          
      }, 
      errors => {

      }));
    });
  }
  makeid() {
    var text = "";
    var possible = "ABCDEF0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
