import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class BookService {

  constructor(private http:Http) { }

  getBooks(query:string, startIndex: number) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&startIndex=${startIndex}`)
    .map(res => res.json());
  }

}