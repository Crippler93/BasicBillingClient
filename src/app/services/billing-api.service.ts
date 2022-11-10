import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingAPIService {

  private _bills = [];

  constructor(
    private http: HttpClient
  ) {
    this.getPendingBills();
  }

  private getPendingBills()
  {
    this.http.get<any>(environment.api_uri + `/Billing/pending`).pipe(take(1)).subscribe(
      (bills) => {
        this._bills = bills;
      }
    )
  }

  public get bills()
  {
    return this._bills;
  }
}
