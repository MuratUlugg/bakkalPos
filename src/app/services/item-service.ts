import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../models/item-model';
import { ItemList } from '../models/item-list-model';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}
  public loading = true;
  private apiUrl = 'http://localhost:1995/stock';

  // tslint:disable-next-line:typedef
  public getItem(page: number, limit: number) {
    const api = `${this.apiUrl}`;
    return this.httpClient.get<ItemModel[]>(api).pipe(retry(1),
      tap((x) => {
        this.loading = false;
      })
    );
  }
  // tslint:disable-next-line:typedef
  public getItemId(id: number) {
    const api = `${this.apiUrl}/${id}`;
    return this.httpClient.get<ItemModel>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
}
