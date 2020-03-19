import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  readonly productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  readonly products$ = this.productsService.read();
  private readonly subscriptions = new Subscription();
  readonly selectedDates$: BehaviorSubject<{ endDate: Moment; startDate: Moment }> = new BehaviorSubject(null);
  readonly productsToShow$ = this.productsSubject$.pipe(
    filter(products => !!products.length),
    switchMap(products =>
      this.selectedDates$.pipe(
        map(dates => (!dates ? products : products.filter(product => moment(product.createdAt).isBetween(dates.startDate, dates.endDate))))
      )
    )
  );

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscriptions.add(this.products$.subscribe(products => this.productsSubject$.next(products)));
  }

  onCreateProduct(product: Pick<Product, 'name' | 'price'>) {
    this.subscriptions.add(
      this.productsService
        .create(product)
        .pipe(switchMap(_ => this.products$))
        .subscribe(products => this.productsSubject$.next(products))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
