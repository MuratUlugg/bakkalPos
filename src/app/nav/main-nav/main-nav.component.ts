import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

enum MainPage {
  home = 1,
  sale = 2,
  account = 3,
  invoice = 4,
  report = 5
}
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  pageActive: MainPage;
  constructor(
    private router: Router // Router adında bir router tanımladık.Yapılacak işlem routerdaki her değişikliği takip etmek.
  ) {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        // x  navigasyonun bittiği değişken ise
        if (x.url.indexOf('home') > 0) {
          // url home ise
          this.pageActive = MainPage.home;
        } else if (x.url.indexOf('sale') > 0) {
          this.pageActive = MainPage.sale;
        } else if (x.url.indexOf('account') > 0) {
          this.pageActive = MainPage.account;
        } else if (x.url.indexOf('invoice') > 0) {
          this.pageActive = MainPage.invoice;
        } else if (x.url.indexOf('report') > 0) {
          this.pageActive = MainPage.report;
        } else {
          this.pageActive = MainPage.home;
        }
      }
    });
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  search(searchText) {
    if (searchText === '' || searchText == null || searchText === undefined) {
      return false;
    }
    this.router.navigateByUrl(`/search/page/1?s=${searchText}`);
  }
}
