import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmationHistoryDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-history-detail',
  templateUrl: 'confirmation-history-detail.html',
})
export class ConfirmationHistoryDetailPage {
  public name:string;
  public cashtag: string;
  public transactionID: string;
  public amount:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.amount = this.navParams.get('amount');
    this.name = this.navParams.get('name');
    this.cashtag = this.navParams.get('cashtag');
    this.transactionID = this.navParams.get('transactionID');
    this.transactionID = this.transactionID.substring(this.transactionID.length-5);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationHistoryDetailPage');
  }

}
