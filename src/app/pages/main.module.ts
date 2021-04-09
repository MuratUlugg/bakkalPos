import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material.module';

import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import { AccountComponent } from './account/account.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportComponent } from './report/report.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { MainNavComponent } from '../nav/main-nav/main-nav.component';


@NgModule({
  declarations: [
    HomeComponent,
    SaleComponent,
    AccountComponent,
    InvoiceComponent,
    ReportComponent,
    MainLayoutComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
})
export class MainModule {}