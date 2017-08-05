import { Injectable,  } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable'

import { BookService } from "../shared/book.service";

@Injectable()
export class BookResolve implements Resolve<any> {

    constructor(private bookService: BookService) { };

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = route.params['id'];
        return this.bookService.getBook(id);
    }
}