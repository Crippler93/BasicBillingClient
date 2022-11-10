import {Component} from '@angular/core'
import { BillingAPIService } from '../services/billing-api.service';

@Component({
  template: '',
  styleUrls: ['pending-bills-table.scss'],
  templateUrl: 'pending-bills-table.html'
})
export class PendingBillsTable {

  public displayedColumns: string[] = ['id', 'state', 'amount', 'period', 'category', 'client'];

  constructor(public billService: BillingAPIService){}

}
