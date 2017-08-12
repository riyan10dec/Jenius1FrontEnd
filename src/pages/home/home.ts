
import { IonicPage, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaymentDetailPage} from '../payment-detail/payment-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public amount: string;
  public sendTo: string;
  public showModal: boolean;
  public date:string;
  constructor(public navCtrl: NavController, public navParam :NavParams) {

    this.amount = this.navParam.get('amount');
    this.sendTo = this.navParam.get('sendTo');
    if(this.amount !== undefined && this.sendTo !== undefined){
      this.showModal = true;
    }
    console.log(this.navParam.get('amount'));
  }
  ionViewDidLoad(){
  }
  goToPaymentDetail(){
    this.navCtrl.setRoot(PaymentDetailPage,{},{animate:false});
  }
}
