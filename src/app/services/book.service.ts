import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { loadBooks, loadBook, addBook, updateBook, removeBook } from '../store/book/book.actions';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { BookSelectors } from '../store/book/book.selectors';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private readonly store: Store<State>) { }

  public loadBooks(): void {
    this.store.dispatch(loadBooks());
  }

  public loadBook(id: number): void {
    this.store.dispatch(loadBook({ id }));
  }

  public get books$(): Observable<Book[]> {
    return this.store.pipe(select(BookSelectors.selectBooks));
  }

  public getBookById(id: number): Observable<Book> {
    return this.store.pipe(select(BookSelectors.selectBook, id));
  }


  public insert(book: Book): void {
    this.store.dispatch(addBook({ book }));
  }

  public update(book: Book): void {
    this.store.dispatch(updateBook({ book }));
  }

  public remove(id: number): void {
    this.store.dispatch(removeBook({ id }));
  }
}
