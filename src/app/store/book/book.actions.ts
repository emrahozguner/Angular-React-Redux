import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book.model';

/****************************************
 * GET all the books
 ****************************************/
export const loadBooks = createAction(
  '[Book/API] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Book/API] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book/API] Load Books Failure',
  props<{ errorMessage: string }>()
);

/****************************************
 * GET book by id
 ****************************************/

export const loadBook = createAction(
  '[Book/API] Load Book',
  props<{ id: number }>()
);

export const loadBookSuccess = createAction(
  '[Book/API] Load Book Success',
  props<{ book: Book }>()
);

export const loadBookFailure = createAction(
  '[Book/API] Load Book Failure',
  props<{ errorMessage: string }>()
);
/****************************************
 * ADD new book
 ****************************************/
export const addBook = createAction(
  '[Book/API] Create Book',
  props<{ book: Book }>()
);

export const addBookSuccess = createAction(
  '[Book/API] Create Book Success',
  props<{ book: Book }>()
);

export const addBookFailure = createAction(
  '[Book/API] Create Book Failure',
  props<{ errorMessage: string }>()
);
/****************************************
 * REMOVE a book by id
 ****************************************/
export const removeBook = createAction(
  '[Book/API] Remove Book',
  props<{ id: number }>()
);

export const removeBookSuccess = createAction(
  '[Book/API] Remove Book Success',
  props<{ book: Book }>()
);

export const removeBookFailure = createAction(
  '[Book/API] Remove Book Failure',
  props<{ errorMessage: string }>()
);
/****************************************
 * UPDATE game by id
 ****************************************/
export const updateBook = createAction(
  '[Book/API] Update Book',
  props<{ book: Book }>()
);

export const updateBookSuccess = createAction(
  '[Book/API] Update Book Success',
  props<{ book: Book }>()
);

export const updateBookFailure = createAction(
  '[Book/API] Update Book Failure',
  props<{ errorMessage: string }>()
);
