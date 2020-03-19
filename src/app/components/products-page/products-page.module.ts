import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsPageComponent } from './products-page.component';
import { ProductFormModule } from '../product-form/product-form.module';
import { ProductTableModule } from '../product-table/product-table.module';
import { ProductsFilterModule } from '../products-filter/products-filter.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductsPageComponent }]),
    ProductFormModule,
    ProductTableModule,
    ProductsFilterModule
  ]
})
export class ProductsPageModule {}
