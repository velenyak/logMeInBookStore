import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../shared/book.service";
import { CartService } from "../shared/cart.service";

const FOR_SALE: string = 'FOR_SALE';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  id: string;
  book;
  price: string;
  orderCount: number;
  authors: string;

  constructor(private route: ActivatedRoute, private bookService: BookService, private cartService: CartService) { }

  ngOnInit() {
    this.orderCount = 1;
    this.route.data.subscribe(
      data => {
        this.book = data.book;
        this.authors = this.bookService.convertAuthors(this.book.volumeInfo.authors);
        this.price = this.setPrice(this.book);
      }
    )
  }

  private setPrice(book) {
    switch (book.saleInfo.saleability) {
      case FOR_SALE:
        return `Price: ${book.saleInfo.retailPrice.amount} ${book.saleInfo.retailPrice.currencyCode}`;       
      default:
        return 'Price: FREE';
    }
  }

  public addToCart(book, orderCount: number) {
    let cartItem = {
      'book': book,
      'count': orderCount
    };

    let cart: Array<any> = JSON.parse(sessionStorage.getItem('cart'));
    if(cart == null) {
      cart = [];
      cart.push(cartItem);
    }
    else {
      let hasItem = false;
      for(let i = 0; i < cart.length; i++) {
        if(cart[i].book.id == cartItem.book.id) {
          hasItem = true;
          cart[i].count += cartItem.count;
        }
      }
      if(!hasItem) {
        cart.push(cartItem);
      }
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    this.cartService.newItem(cart);
  }

}
