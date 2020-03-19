import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { ProductsFilterComponent } from './products-filter.component';

@NgModule({
  declarations: [ProductsFilterComponent],
  exports: [ProductsFilterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, NgxDaterangepickerMd.forRoot()]
})
export class ProductsFilterModule {}
