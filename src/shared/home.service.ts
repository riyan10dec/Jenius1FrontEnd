import { ApiService } from './apiService';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    constructor(private apiService: ApiService) { }

    private getHistoryPaymentRequestQuery: string = 'api/paymentrequest/$buyer';
    private getHistoryPaymentConfirmationQuery: string = 'api/paymentrequest/$buyer';

    getHistoryPaymentRequest(merchantid: string): Observable<any> {
        return this.apiService.get(this.getHistoryPaymentRequestQuery.replace('@0', merchantid))
            .map((data) => data);
    }
    getHistoryPaymentConfirmation(customerid: string): Observable<any> {
        return this.apiService.get(this.getHistoryPaymentConfirmationQuery.replace('@0', customerid))
            .map((data) => data);
    }
}
