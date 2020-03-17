import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { ProductTableComponent } from './product-table.component';

@NgModule({
  declarations: [ProductTableComponent],
  exports: [ProductTableComponent],
  imports: [CommonModule, MatTableModule]
})
export class ProductTableModule {}
