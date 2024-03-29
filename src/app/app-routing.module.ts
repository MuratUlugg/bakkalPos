import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { CategorystockComponent } from './pages/item/categorystock/categorystock.component';
import { StockComponent } from './pages/item/stock/stock.component';
import { ReportComponent } from './pages/report/report.component';
import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [
  {
    // www.bakkalPos.com/
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        // www.bakkalPos.com/
        path: '',
        component: HomeComponent,
      },
      {
        // www.bakkalPos.com/sale
        path: 'sale',
        component: SaleComponent,
      },
      {
        // www.bakkalPos.com/stock
        path: 'stocks',
        component: StockComponent,
      },
      {
        // www.bakkalPos.com/stock/page/1
        path: 'stocks/page/:pageIndex',
        component: StockComponent,
      },
      {
        // www.bakkalPos.com/stockbycategory
        path: 'stocks/bycategory/:categoryid',
        component: CategorystockComponent,
      },
      {
        // www.bakkalPos.com/stockbycategory/page/1
        path: 'stocks/bycategory/:categoryid/page/:pageIndex',
        component: CategorystockComponent,
      },
      {
        // www.bakkalPos.com/invoice
        path: 'invoice',
        component: InvoiceComponent,
      },
      {
        // www.bakkalPos.com/account
        path: 'account',
        component: AccountComponent,
      },
      {
        // www.bakkalPos.com/report
        path: 'report',
        component: ReportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
