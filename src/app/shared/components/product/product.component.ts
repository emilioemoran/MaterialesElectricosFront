import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent {
@Input() product?:Product
@Output() verMasEvent: EventEmitter<any> = new EventEmitter();

constructor() { }

verMas() {
  this.verMasEvent.emit(this.product?.id);
}

}


