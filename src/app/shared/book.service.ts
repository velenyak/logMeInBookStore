import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class BookService {

  constructor(private http:Http) { }

  getBooks(query:string, startIndex: number) {
    /**
     * According to Google Books API to search in title only the uri should be:
     * https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&startIndex=${startIndex}
     * However I found it to be inaccurate, so stayed used it without the intitle parameter
     */
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}`)
    .map(res => res.json());
  }

  getBook(id:string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .map(res => res.json());
  }

  convertAuthors(authorsResponse: string[]) {
    let authors: string = '';
    if(authorsResponse != undefined) {
      for(let i = 0; i < authorsResponse.length - 2; i++) {
        authors = authors.concat(authorsResponse[i] + ', ');
      }
      return authors.concat(authorsResponse[authorsResponse.length - 1]);
    }
    else {
      return 'Unknown';
    }
  }

}