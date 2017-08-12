import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ConfirmationTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-tabs',
  templateUrl: 'confirmation-tabs.html'
})
export class ConfirmationTabsPage {

  confirmationRoot = 'ConfirmationPage'
  confirmationHistoryRoot = 'ConfirmationHistoryPage'


  constructor(public navCtrl: NavController) {}

}
