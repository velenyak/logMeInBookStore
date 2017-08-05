import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../shared/book.service";

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

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

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

  private loadBook(id: string) {
    this.bookService.getBook(id).subscribe(
      response => {
        console.log(response);
        this.book = response;
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

}
