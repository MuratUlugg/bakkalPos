import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Http istekleri için import
import { Category } from '../models/category'; // Model import

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:1995/category';

  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  public getCategories() {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

}
