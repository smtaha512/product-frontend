import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent implements OnInit {
  @Input() products: Product[];
  readonly displayedColumns: string[] = ['name', 'price', 'createdAt'];

  constructor() {}

  ngOnInit(): void {}
}
