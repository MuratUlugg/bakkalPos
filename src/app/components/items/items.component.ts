import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item-service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  defaultArticlePicture = 'assets/item-empty.jpg';
  @Input() totalCount: number;
  @Input() itemss: ItemModel[];
  @Input() page: number;
  @Input() limit: number;
  @Input() loadingItem: number;
  @Input() typeList: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // tslint:disable-next-line:no-shadowed-variable
    public ItemService: ItemService
  ) {}

  // tslint:disable-next-line:typedef
  createRange() {
    // tslint:disable-next-line:prefer-const
    let items: number[] = [];
    for (let i = 1; i <= this.loadingItem; i++) {
      items.push(i);
    }
    return items;
  }


  ngOnInit(): void {
    console.log(this.itemss);
    this.ItemService.loading = true;

  }

  // tslint:disable-next-line:typedef
  pageChanged(event) {
    this.ItemService.loading = true;
    this.page = event;
    switch (this.typeList) {
      case 'stock':
        this.router.navigateByUrl(`/page/${this.page}`);
        break;
      case 'category':
        const categoryId = this.route.snapshot.paramMap.get('categoryid');
        this.router.navigateByUrl(
          `/bycategory/${categoryId}/page/${this.page}`
        );
        break;
      // case 'search':
      //   let searchText = this.route.snapshot.queryParamMap.get('s');
      //   this.router.navigateByUrl(`/search/page/${this.page}?s=${searchText}`);
      //   break;
      // case 'archive':
      //   let year = this.route.snapshot.paramMap.get('year');
      //   let month = this.route.snapshot.paramMap.get('month');
      //   this.router.navigateByUrl(
      //     `/archive/${year}/${month}/page/${this.page}`
      //   );
      //   break;
      default:
        break;
    }
  }

}
