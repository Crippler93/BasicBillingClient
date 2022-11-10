import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { PendingBillsTable } from './pending-bills-table/pending-bills-table.component';
import { BillsComponent } from './bills/bills.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    PendingBillsTable,
    BillsComponent,
    PayBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
