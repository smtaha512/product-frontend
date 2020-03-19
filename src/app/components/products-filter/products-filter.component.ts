import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Moment } from 'moment';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsFilterComponent implements OnInit {
  @Output() selectedDates: EventEmitter<{ startDate: Moment; endDate: Moment }> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
