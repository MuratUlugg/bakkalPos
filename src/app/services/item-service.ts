import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../models/item-model';
import { ItemList } from '../models/item-list-model';
import { catchError, retry, tap } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient , private socket: Socket) {}
  public loading = true;

  private apiUrl = 'http://localhost:1995/stock';

  updatedStocks = this.socket.fromEvent<ItemModel>('updatedStocks');
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

    // tslint:disable-next-line:typedef
    public getItemByCategoryId(id: number) {
      const api = `${this.apiUrl}/stockbycategory/${id}`;
      console.log(api);
      return this.httpClient.get<ItemModel[]>(api).pipe(
        tap((x) => {
          this.loading = false;
        })
      );
    }
}
