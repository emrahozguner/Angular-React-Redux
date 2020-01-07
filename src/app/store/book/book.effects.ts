import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import {
  loadBooks, loadBooksSuccess, loadBooksFailure,
  loadBook, loadBookSuccess, loadBookFailure, addBook,
  addBookSuccess, addBookFailure, updateBookFailure, updateBookSuccess,
  updateBook, removeBook, removeBookSuccess, removeBookFailure
} from './book.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BookHttpService } from 'src/app/services/http/book-http.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class BookEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly httpService: BookHttpService,
    private readonly router: Router) { }

  @Effect()
  loadBooksEffect = this.actions$.pipe(
    ofType(loadBooks),
    switchMap(() => this.httpService.getBooks().pipe(
      map(books => loadBooksSuccess({ books })),
      catchError((e) => of(loadBooksFailure(e)))
    )
    ));

  @Effect()
  loadBookEffect = this.actions$.pipe(
    ofType(loadBook),
    switchMap(({ id }) => this.httpService.getBookById(id).pipe(
      map(book => loadBookSuccess({ book })),
      catchError((e) => of(loadBookFailure(e)))
    )
    ));

  @Effect()
  saveBookEffect = this.actions$.pipe(
    ofType(addBook),
    switchMap(({ book }) => this.httpService.insert(book).pipe(
      map(newbook => addBookSuccess({ book: newbook })),
      catchError((e) => of(addBookFailure(e)))
    )
    ));

  @Effect({ dispatch: false })
  saveBookSuccessEffect = this.actions$.pipe(
    ofType(addBookSuccess),
    map(() => this.router.navigate(['/books']))
  );

  @Effect()
  updateBookEffect = this.actions$.pipe(
    ofType(updateBook),
    switchMap(({ book }) => this.httpService.update(book).pipe(
      map(newbook => updateBookSuccess({ book: newbook })),
      catchError((e) => of(updateBookFailure(e)))
    )
    ));

  @Effect({ dispatch: false })
  updateBookSuccessEffect = this.actions$.pipe(
    ofType(updateBookSuccess),
    map(() => this.router.navigate(['/books']))
  );

  @Effect()
  removeBookEffect = this.actions$.pipe(
    ofType(removeBook),
    switchMap(({ id }) => this.httpService.delete(id).pipe(
      map(newbook => removeBookSuccess({ book: newbook })),
      catchError((e) => of(removeBookFailure(e)))
    )
    ));

  @Effect({ dispatch: false })
  removeBookSuccessEffect = this.actions$.pipe(
    ofType(removeBookSuccess),
    map(() => this.router.navigate(['/books']))
  );
}
