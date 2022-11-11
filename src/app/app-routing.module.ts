import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills/bills.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

const routes: Routes = [
  {
    path: 'pending-bills', component: BillsComponent, pathMatch: 'full'
  },
  {
    path: 'payment-history', component: PaymentHistoryComponent, pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'pending-bills', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'pending-bills', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
