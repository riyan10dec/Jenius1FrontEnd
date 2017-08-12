import { ApiService } from '../../shared/apiService';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    constructor(private apiService: ApiService) { }

    private getHistoryPaymentRequestQuery: string = '/cms/getEmployee/@0';
    private getHistoryPaymentConfirmationQuery: string = '/cms/getEmployee/@0';

    getHistoryPaymentRequest(merchantid: string): Observable<any> {
        return this.apiService.get(this.getHistoryPaymentRequestQuery.replace('@0', merchantid))
            .map((data) => data);
    }
    getHistoryPaymentConfirmation(customerid: string): Observable<any> {
        return this.apiService.get(this.getHistoryPaymentConfirmationQuery.replace('@0', customerid))
            .map((data) => data);
    }
}
