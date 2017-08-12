import { List } from 'ionic-angular/es2015';
import { DateTime } from 'ionic-angular/umd';

import { IonicPage, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaymentTabsPage} from '../payment-tabs/payment-tabs';
import {ConfirmationTabsPage} from '../confirmation-tabs/confirmation-tabs';
import {  HomeService} from '../../shared/home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService],
})
export class HomePage {
  public amount: string;
  public sendTo: string;
  public showModal: boolean;
  public date:Date;
  public isMerchant: boolean;
  public listHistoryPaymentConfirmation:any;
  public listHistoryPaymentRequest:any;
  constructor(public navCtrl: NavController, public navParam :NavParams, public homeService: HomeService) {
    this.isMerchant = true;
    this.amount = this.navParam.get('amount');
    this.sendTo = this.navParam.get('sendTo');
    this.isMerchant = this.navParam.get('isMerchant');
    this.date = new Date();
    if (this.amount !== undefined && this.sendTo !== undefined){
      this.showModal = true;
    }
    console.log(this.navParam.get('amount'));
  }
  ionViewDidLoad(){
    this.isMerchant = true;
    this.getHistoryPaymentConfirmation(1);
  }

   getHistoryPaymentConfirmation(customerid: any) {
    return new Promise((resolve, reject) => {
      resolve(this.homeService.getHistoryPaymentConfirmation(customerid).subscribe(
      data => {
        data.forEach(data => {
          console.log(data);
        });
      }, 
      errors => {

      }));
    });
  }
  goToPaymentDetail(){
    this.navCtrl.setRoot(PaymentTabsPage,{},{animate:false});
  }
  goToPaymentConfirmation(){
    this.navCtrl.setRoot(ConfirmationTabsPage,{},{animate:false});
  }
  closeModal(){
    this.showModal= false;
  }
}
