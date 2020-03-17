import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit {
  readonly products$ = this.productsService.read();
  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {}
}
