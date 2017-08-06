import { Component, OnInit } from '@angular/core';
import { CartService } from "../shared/cart.service";

const FOR_SALE: string = 'FOR_SALE';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<any>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = JSON.parse(sessionStorage.getItem('cart'));
  }

  public removeItem(index: number) {
    this.cartItems.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartService.cartItemChange(this.cartItems);
  }

  public getTotalPrice(item) {
    switch (item.book.saleInfo.saleability) {
      case FOR_SALE:
        return `Price: ${item.book.saleInfo.retailPrice.amount * item.quantity} ${item.book.saleInfo.retailPrice.currencyCode}`;       
      default:
        return 'FREE';
    }
  }

}
