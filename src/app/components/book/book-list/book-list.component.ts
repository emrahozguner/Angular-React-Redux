import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { AuthorService } from 'src/app/services/author.service';
import { Observable, Subject } from 'rxjs';
import { Author } from 'src/app/models/author.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit, OnDestroy {

  author$: Observable<Author>;
  destroyed$ = new Subject<boolean>();
  title = 'List of Books';


  constructor(public readonly bookService: BookService,
    public readonly authorService: AuthorService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }


  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Book?')) {
      this.bookService.remove(id);
    }
  }
}
