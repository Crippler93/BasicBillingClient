import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingBillsTable } from './pending-bills-table/pending-bills-table.component';

const routes: Routes = [
  {
    path: 'pending-bills', component: PendingBillsTable, pathMatch: 'full'
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
