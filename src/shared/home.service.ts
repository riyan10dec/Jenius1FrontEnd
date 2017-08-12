
import { ApiService } from './apiService';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    constructor(private apiService: ApiService) { }

    private paymentConfirmationQuery:string='api/paymentrequest/outstanding/@0';
    private getHistoryPaymentRequestQuery: string = 'api/paymentrequest/$buyer';
    private getHistoryPaymentConfirmationQuery: string = 'api/paymentrequest/$buyer';
    private getNameQuery: string = 'api/customer/@0';
    private paymentRequestQuery: string = 'api/paymentrequest';
    private paymentRequestHistoryQuery: string = 'api/paymentrequest/history/@0';
    private payQuery: string = 'api/paymentrequest/pay/@0';

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
    getHistory(cashtag: string): Observable<any> {
        return this.apiService.get(this.paymentRequestHistoryQuery.replace('@0', cashtag))
            .map((data) => data);
    }
    paymentRequest(payload): Observable<any> {
        return this.apiService.post(this.paymentRequestQuery,payload).map(data => data.result);
    }
    paymentConfirmation(cashtag: string): Observable<any> {
        return this.apiService.get(this.paymentConfirmationQuery.replace('@0', cashtag))
            .map((data) => data);
    }
     pay(payload): Observable<any> {
        return this.apiService.post(this.payQuery.replace('@0', payload)).map(data => data);
    }
}
