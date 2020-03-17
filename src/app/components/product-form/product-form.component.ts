import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {
  @Output() createProduct: EventEmitter<Pick<Product, 'name' | 'price'>> = new EventEmitter();

  readonly form = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    price: this.fb.control('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { name, price } = this.form.value as Pick<Product, 'name' | 'price'>;

    this.createProduct.emit({ name, price });
  }

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Please enter product name';
    }
    return this.name.hasError('minLength') ? 'Product name should have atleast 3 letters' : '';
  }

  get name() {
    return this.form.get('name');
  }

  get price() {
    return this.form.get('price');
  }
}
