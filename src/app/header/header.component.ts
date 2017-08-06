import { Component, OnInit } from '@angular/core';

import { CartService } from "../shared/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed: string;
  subscription: any;
  isCartEmpty: boolean

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.collapsed = 'yes';
    this.isCartEmpty = sessionStorage.getItem('cart') == null;
    this.subscription = this.cartService.cartChange.subscribe(
      cart => {
        console.log(cart);
        this.isCartEmpty = cart.length == 0;
      }
    )
  }

  public toggle() {
    this.collapsed = (this.collapsed === 'yes' ? 'no' : 'yes');
  }

}
