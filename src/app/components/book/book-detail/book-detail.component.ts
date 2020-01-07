import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, flatMap, switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService
  ) { }

  ngOnInit() {
    const id$ = this.route.params.pipe(
      map(x => parseInt(x.id, 10))
    );

    id$.subscribe(id => this.bookService.loadBook(id));

    this.book$ = id$.pipe(
      switchMap(id => this.bookService.getBookById(id)),
      filter(x => Boolean(x))
    );
  }
}
