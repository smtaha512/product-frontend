import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  readonly products$ = this.productsService.read();
  private readonly subscriptions = new Subscription();
  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {}

  onCreateProduct(product: Pick<Product, 'name' | 'price'>) {
    this.subscriptions.add(this.productsService.create(product).subscribe());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
