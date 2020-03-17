import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Product } from 'src/app/models/product';

type GetAllQuery = Partial<Product & { minCreatedAt: number; maxCreatedAt: number }>;
type CreateBody = Pick<Product, 'name' | 'price'>;

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly base = '/products';
  constructor(private readonly http: HttpClient) {}

  create(product: CreateBody) {
    return this.http.post(this.base, product);
  }

  read(query?: GetAllQuery) {
    let params = new HttpParams();
    for (const item in query) {
      if (query.hasOwnProperty(item)) {
        params = params.set(item, query[item]);
      }
    }
    return this.http.get<Product[]>(this.base, { params });
  }
}
