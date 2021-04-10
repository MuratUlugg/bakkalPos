import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}


  ngOnInit(): void {
    // component yüklendiği zaman geleceği event
    this.categoryService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });    // nesne obs olduğu için ablone olmalıyız.
  }

}
