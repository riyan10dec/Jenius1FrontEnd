import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationTabsPage } from './confirmation-tabs';

@NgModule({
  declarations: [
    ConfirmationTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationTabsPage),
  ]
})
export class ConfirmationTabsPageModule {}
