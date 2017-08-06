import { Component, OnInit } from '@angular/core';
import { BookService } from "../shared/book.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [BookService]
})
export class MainComponent implements OnInit {

  searchText: string;
  query: string;
  books: string[];
  activePageNumbers: number[];
  currentPage: number;
  maxPage: number;
  isLoading: boolean;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.activePageNumbers = Array.from(Array(8).keys());
    this.isLoading = false;
  }

  public searchBooks(searchText: string, page: number) {
    this.isLoading = true;
    this.query = searchText;
    let startIndex = (page - 1) * 10;
    this.bookService.getBooks(encodeURIComponent(searchText), startIndex).subscribe(
      response => {
        this.isLoading = false;
        this.books = this.convertResponse(response.items);
        this.currentPage = page;
        this.maxPage = response.items.length > 10 ? Math.ceil(response.totalItems / 10) : 1;
        this.activePageNumbers = this.getActivePageNumbers(this.maxPage, this.currentPage);
      }
    )
  }

  public convertResponse(booksResponse: any) {
    let books = [];
    for (let book of booksResponse) {
      let retBook = {
        id: book.id,
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        authors: this.bookService.convertAuthors(book.volumeInfo.authors),
        publishDate: this.convertPublishDate(book.volumeInfo.publishedDate),
        imageLinks: book.volumeInfo.imageLinks || {smallThumbnail: 'https://books.google.hu//googlebooks/images/no_cover_thumb.gif'}
      }
      books.push(retBook);
    }
    return books;
  }

  private convertPublishDate(date: string) {
    if(date != undefined) {
      if(date.length > 4) {
        return date.substr(0, date.indexOf('-'));
      }
      else {
        return date;
      }
    }
    else {
      return 'Unknown'
    }
  }

  public getActivePageNumbers(maxPage: number, currentPage:number) {
    let ret: number[] = [];
    let minActivePage = this.getMinActivePageNumber(currentPage);
    let i = minActivePage;
    while(i < minActivePage + 8 && i <= this.maxPage) {
      ret.push(i);
      i++;
    }
    return ret;
  }

  private getMinActivePageNumber(currentPage: number) {
    let minActivePageNumber: number = currentPage;
    while(minActivePageNumber > 1 && minActivePageNumber > currentPage - 3) {
      minActivePageNumber--;
    }
    return minActivePageNumber;
  }

  public switchPage(pageNumber: number) {
    if(this.currentPage != pageNumber) {
      this.searchBooks(this.query, pageNumber);
    }
  }

}