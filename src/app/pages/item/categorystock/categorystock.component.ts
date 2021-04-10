import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/models/item-model';
import { ItemService } from 'src/app/services/item-service';
@Component({
  selector: 'app-categorystock',
  templateUrl: './categorystock.component.html',
  styleUrls: ['./categorystock.component.css']
})
export class CategorystockComponent implements OnInit {

    constructor(
      private itemService: ItemService,
      private router: Router,
      private route: ActivatedRoute
    ) {}
    // tslint:disable-next-line:member-ordering
    page = 1;
    items: ItemModel[];
    totalCount = 0;
    limit = 4;
    loadingItem = 2;
    ajax;
    categoryId: number;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    // Sayfa geçişlerinde ajax isteklerini iptal etmek için
    if (this.ajax != null) {
      this.ajax.unsubscribe();
    } // İptal et
  }
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
        if (params.get('categoryid')) {
          this.categoryId = Number(params.get('categoryid'));
        }
        this.ajax = this.itemService
          .getItemByCategoryId(this.categoryId)
          .subscribe((data) => {
            this.items = data;
            this.totalCount = data.length;
            console.log(this.totalCount);
          });
      });
    }
}
