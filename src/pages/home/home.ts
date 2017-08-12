import { DateTime } from 'ionic-angular/umd';

import { IonicPage, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaymentTabsPage} from '../payment-tabs/payment-tabs';
import {ConfirmationTabsPage} from '../confirmation-tabs/confirmation-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public amount: string;
  public sendTo: string;
  public showModal: boolean;
  public date:Date;
  public isMerchant: boolean;
  constructor(public navCtrl: NavController, public navParam :NavParams) {

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
