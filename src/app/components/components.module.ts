import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { ItemsComponent } from './items/items.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    ItemsComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [
    ItemsComponent, CategoryComponent,
  ],
})
export class ComponentsModule {}
