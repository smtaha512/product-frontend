import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsPageComponent } from './products-page.component';
import { ProductFormModule } from '../product-form/product-form.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ProductsPageComponent }]), ProductFormModule]
})
export class ProductsPageModule {}
