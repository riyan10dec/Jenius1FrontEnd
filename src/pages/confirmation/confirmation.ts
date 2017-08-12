import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import {  HomeService} from '../../shared/home.service';

import {  General} from '../../class/profile';
@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
  providers: [HomeService],
})
export class ConfirmationPage {
  public buyer: string;
   public seller: string;
   public amount: number;
   public sendTo: string;
  public listConf: Array<General> = new Array<General>();
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private service: HomeService) {
     
    // this.seller = "$seller";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
  this.paymentConfirmation("$buyer");
  
      // this.buyer = this.navParams.get('payerCashTag');
      // this.seller = this.navParams.get('requesterCashTag');
    }
  
    
    paymentConfirmation(cashtag: any) {
    return new Promise((resolve, reject) => {
      resolve(this.service.paymentConfirmation(cashtag).subscribe(
      data => {
        data.forEach(e => {
         let g = new General();
         console.log(e);
          g.custname = e.payerName;
          g.merchantname = e.requesterName;
          g.trxamount = e.amount;
          if(e.referenceNo != null){
            g.trxid = e.referenceNo.substring(e.referenceNo.length-5);
          }
          g.trid2 = e.id;
          this.listConf.push(g);
        });
          this.buyer = data.requesterCashTag;
          this.seller = data.payerCashTag;
      }, 
      errors => {

      }));
    });
  }

    submitRequest(trid2:number){
      this.pay(trid2);
    }
  pay(trid:number){
    return new Promise((resolve, reject) => {
      resolve(this.service.pay(trid).subscribe(
      data => {
        console.log(data);
        this.amount = data.amount;
        this.sendTo = data.requesterName;
        this.app.getRootNav().setRoot(HomePage, {
          isMerchant: false,
          amount : this.amount,
          sendTo : this.sendTo
        });
      }, 
      errors => {

      }));
    });
  }
}
