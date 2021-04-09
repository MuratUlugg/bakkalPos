import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    ItemsComponent,
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [
    ItemsComponent,
  ],
})
export class ComponentsModule {}
