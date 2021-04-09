import { Category } from './category';

export class ItemModel {
  stockCode: string;
  stockName: string;
  unit: string;
  quantityAvailable: number;
  cost: number;
  status: string;
  quantityOnOrder: number;
  currencyCode: string ;
  supplierName: string;
  supplierId: string;
  createDate: Date ;
  lastQuantityUpdateDate: Date ;
  lastCostUpdateDate: Date ;
  lastUpdateDate: Date;
  categoryId: string;
  picture: string;
}
