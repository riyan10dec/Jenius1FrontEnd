import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfirmationHistoryDetailPage} from '../confirmation-history-detail/confirmation-history-detail';
import { List } from 'ionic-angular/umd';
import { HomePage } from '../home/home';
import {HistoryDetailPage} from '../history-detail/history-detail';
import {  HomeService} from '../../shared/home.service';
import {  General} from '../../class/profile';

/**
 * Generated class for the ConfirmationHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-history',
  templateUrl: 'confirmation-history.html',
  
  providers: [HomeService],
})
export class ConfirmationHistoryPage {
  public listHistory:Array<General> = new Array<General>();
  constructor(public navCtrl: NavController, public navParams: NavParams,private service: HomeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationHistoryPage');
    this.getHistory("$buyer");
  }
  goToHistoryDetail(g: General){
    this.navCtrl.push(HistoryDetailPage,{
      name: g.merchantname,
      amount: g.trxamount,
      transactionID: g.trxid,
      cashtag: g.merchantcashtag
    });
  }
  getHistory(cashtag: any){
    return new Promise((resolve, reject) => {
      resolve(this.service.getHistory(cashtag).subscribe(
      data => {
        data.forEach(data => {
          let g  = new General();
          g.trxdate = new Date(data.transactionTime);
          g.trxamount = data.amount;
          g.custname = data.payerName;
          g.custcashtag = data.payerCashTag;
          g.trxid = data.referenceNo;
          this.listHistory.push(g);
        });
      }, 
      errors => {

      }));
    });
  }
}
