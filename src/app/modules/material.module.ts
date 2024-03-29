import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatAutocompleteModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule {}
