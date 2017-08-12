import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfirmationHistoryDetailPage} from '../confirmation-history-detail/confirmation-history-detail';

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
})
export class ConfirmationHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationHistoryPage');
  }
  goToHistoryDetail(){
    this.navCtrl.push(ConfirmationHistoryDetailPage);
  }
}
