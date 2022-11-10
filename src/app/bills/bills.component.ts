import { Component, OnInit } from '@angular/core';
import { BillingStateService } from '../services/billing-state.service';

@Component({
  templateUrl: './bills.component.html',
})
export class BillsComponent implements OnInit {

  constructor(
    public billState: BillingStateService
  ) { }

  ngOnInit(): void {
  }

}
