import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ProductFormComponent } from './product-form.component';

@NgModule({
  declarations: [ProductFormComponent],
  exports: [ProductFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule]
})
export class ProductFormModule {}
