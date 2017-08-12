import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationHistoryPage } from './confirmation-history';

@NgModule({
  declarations: [
    ConfirmationHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationHistoryPage),
  ],
})
export class ConfirmationHistoryPageModule {}
