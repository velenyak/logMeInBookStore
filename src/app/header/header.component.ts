import { Component, OnInit } from '@angular/core';

import { CartService } from "../shared/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription: any;
  isCartEmpty: boolean

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.isCartEmpty = sessionStorage.getItem('cart') == null || JSON.parse(sessionStorage.getItem('cart')).length == 0;
    this.subscription = this.cartService.cartChange.subscribe(
      cart => {
        console.log(cart);
        this.isCartEmpty = cart.length == 0;
      }
    )
  }

}
