import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentTabsPage } from './payment-tabs';

@NgModule({
  declarations: [
    PaymentTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentTabsPage),
  ]
})
export class PaymentTabsPageModule {}
