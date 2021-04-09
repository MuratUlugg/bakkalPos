import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemModel  } from 'src/app/models/item-model';
import { ItemService } from 'src/app/services/item-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    // Sayfa geçişlerinde ajax isteklerini iptal etmek için
    if (this.ajax != null) {
      this.ajax.unsubscribe();
    } // İptal et
  }
    // tslint:disable-next-line:member-ordering
    page = 1;
    // tslint:disable-next-line:member-ordering
    items: ItemModel[];
        // tslint:disable-next-line:member-ordering
    totalCount: number;
        // tslint:disable-next-line:member-ordering
    limit = 5;
        // tslint:disable-next-line:member-ordering
    loadingItem = 5;
        // tslint:disable-next-line:member-ordering
    ajax;

    constructor(
      private itemService: ItemService,
      private router: Router,
      private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        if (params.get('pageIndex')) {
          this.page = Number(params.get('pageIndex'));
        }
        if (this.totalCount > 0) {
          if (this.totalCount >= this.page * this.limit) {
            this.loadingItem = 5;
          } else {
            this.loadingItem = this.totalCount - (this.page - 1) * this.limit;
          }
        }
        this.items = [];
        this.totalCount = 0;
        this.ajax = this.itemService
          .getItem(this.page, this.limit)
          .subscribe((data) => {
            this.items = data;
            console.log(this.items);
          });
      });
    }
}
