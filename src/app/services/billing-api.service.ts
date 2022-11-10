import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs';
import { environment } from '../../environments/environment';
import { BillingStateService } from './billing-state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class BillingAPIService {

  private _bills = [];
  private _isLoading = false;

  constructor(
    private http: HttpClient,
    private billState: BillingStateService,
    private _snackBar: MatSnackBar
  ) {
    this.getPendingBills();
  }

  private getPendingBills()
  {
    this._isLoading = true;
    this.http.get<any>(environment.api_uri + `/Billing/pending`).pipe(take(1)).subscribe(
      (bills) => {
        this._bills = bills;
        this._isLoading = false;
      },
      (error) => {
        console.error(error);
        this._isLoading = false;
      }
    )
  }

  public payBill(bill: any)
  {
    const payDTO = {
      clientId: bill.client.id,
      period: bill.billDetails.period,
      category: bill.billDetails.category
    }
    this._isLoading = true;
    this.http.post(environment.api_uri + `/Billing/pay`, payDTO).pipe(take(1)).subscribe(() => {
      this._snackBar.openFromComponent(NotificationComponent, {
        duration: 5 * 1000
      });
      this.getPendingBills();
      this.billState.clearSelectedBill();
    }, (error) => {
      console.error(error);
      this._isLoading = false;

    })
  }

  public get bills()
  {
    return this._bills;
  }

  public get isLoading() {
    return this._isLoading;
  }
}
