import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the NotificationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NotificationService {

  private url: string = 'http://localhost:58715/api/notification/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    console.log('Hello NotificationService Provider');
  }

  registerToken(token: any) {
    this.http.post(this.url + 'register/', JSON.stringify(token), { headers: this.headers })
    .do(res => console.log(res));
  }

}
