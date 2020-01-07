import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as BookActions from './book.actions';
import { Book } from 'src/app/models/book.model';

export const booksFeatureKey = 'books';

export interface State extends EntityState<Book> {
  done: boolean | false;
  // additional entities state properties
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  done: false
  // additional entity state properties
});

const bookReducer = createReducer(
  initialState,
  on(BookActions.loadBooks, (state, action) => {
    return ({ ...state, done: false });
  }),
  on(BookActions.loadBooksSuccess,
    (state, action) => adapter.addAll(action.books, { ...state, done: true })
  ),
  on(BookActions.loadBookSuccess,
    (state, action) => adapter.upsertOne(action.book, { ...state, done: true })
  ),
  on(BookActions.removeBookSuccess,
    (state, action) => adapter.removeOne(action.book.id, { ...state, done: true })
  ),
  on(BookActions.updateBookSuccess,
    (state, action) => adapter.upsertOne(action.book, { ...state, done: true })
  ),
  on(BookActions.addBookSuccess,
    (state, action) => adapter.addOne(action.book, { ...state, done: true })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
