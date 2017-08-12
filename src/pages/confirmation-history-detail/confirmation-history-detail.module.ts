import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationHistoryDetailPage } from './confirmation-history-detail';

@NgModule({
  declarations: [
    ConfirmationHistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationHistoryDetailPage),
  ],
})
export class ConfirmationHistoryDetailPageModule {}
