import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input() productList: any;
  @Input() searchKeys: any;
  @Output() productItems = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}
  addItem(productObj: any) {
    this.productItems.emit(productObj);
  }
}
