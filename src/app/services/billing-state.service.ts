import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingStateService {

  private _selectedBill: any = null

  constructor() { }

  selectBill(bill: any) {
    if (this.isSelected(bill)) {
      this._selectedBill = null;
      return;
    }
    this._selectedBill = bill;
  }

  get selectedBill() {
    return this._selectedBill;
  }

  isSelected(bill: any): boolean {
    return this._selectedBill !== null && bill.id === this._selectedBill.id
  }

  clearSelectedBill()
  {
    this._selectedBill = null;
  }

}
