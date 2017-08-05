import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "app/main/main.component";
import { BookComponent } from "app/book/book.component";
import { BookResolve } from "app/book/book.resolve";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'book/:id',
        component: BookComponent,
        resolve: {book: BookResolve}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [BookResolve]
})
export class AppRoutingModule {}