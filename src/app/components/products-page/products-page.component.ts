import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
