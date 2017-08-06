import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CartService {

  @Output() cartChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  newItem(cartItems) {
    this.cartChange.emit(cartItems);
  }

}
