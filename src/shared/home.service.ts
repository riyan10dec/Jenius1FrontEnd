
import { ApiService } from './apiService';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    constructor(private apiService: ApiService) { }

    private paymentConfirmationQuery:string='api/paymentrequest/outstanding/$buyer';
    private getHistoryPaymentRequestQuery: string = 'api/paymentrequest/$buyer';
    private getHistoryPaymentConfirmationQuery: string = 'api/paymentrequest/$buyer';
    private getNameQuery: string = 'api/customer/@0';
    private paymentRequestQuery: string = 'api/paymentrequests/@0';

    getHistoryPaymentRequest(merchantid: string): Observable<any> {
        return this.apiService.get(this.getHistoryPaymentRequestQuery.replace('@0', merchantid))
            .map((data) => data);
    }
    getHistoryPaymentConfirmation(customerid: string): Observable<any> {
        return this.apiService.get(this.getHistoryPaymentConfirmationQuery.replace('@0', customerid))
            .map((data) => data);
    }
    getName(cashtag: string): Observable<any> {
        return this.apiService.get(this.getNameQuery.replace('@0', cashtag))
            .map((data) => data);
    }
    paymentRequest(payload): Observable<any> {
        return this.apiService.post(this.paymentRequestQuery, 
            {
                data : payload,
            }).map(data => data.result);
    }
    paymentConfirmation(payload): Observable<any> {
        return this.apiService.post(this.paymentConfirmationQuery,payload)
        .map(data => data.result);
    }
}
