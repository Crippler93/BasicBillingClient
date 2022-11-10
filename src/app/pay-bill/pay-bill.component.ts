import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BillingAPIService } from '../services/billing-api.service';

@Component({
  selector: 'pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss']
})
export class PayBillComponent implements OnInit {

  @Input() public billing: any;
  constructor(
    public billService: BillingAPIService,
  ) { }

  ngOnInit(): void {}

  payBilling() {
    this.billService.payBill(this.billing);
  }
}

