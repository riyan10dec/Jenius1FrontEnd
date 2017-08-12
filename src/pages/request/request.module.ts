import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestPage } from './request';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    RequestPage,
  ],
  providers : [
    BarcodeScanner
  ],
  imports: [
    IonicPageModule.forChild(RequestPage),
  ],
})
export class RequestPageModule {}
