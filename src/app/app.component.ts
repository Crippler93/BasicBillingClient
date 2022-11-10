import { Component } from '@angular/core';
import { BillingAPIService } from './services/billing-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BasicBilling.Client';

  constructor(public service: BillingAPIService)
  {}

  ngOnInit() {
  }
}
