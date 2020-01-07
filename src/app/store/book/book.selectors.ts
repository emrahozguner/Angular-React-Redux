import { createSelector } from '@ngrx/store';
import { State } from '..';
import { booksFeatureKey, selectAll, selectEntities } from './book.reducer';
import { Book } from 'src/app/models/book.model';
import { Dictionary } from '@ngrx/entity';

// tslint:disable-next-line: no-namespace
export namespace BookSelectors {
  const selectBooksFeature = (state: State) => state[booksFeatureKey];

  export const selectBooks = createSelector(selectBooksFeature, selectAll);

  export const selectBooksDictionary = createSelector(selectBooksFeature, selectEntities);

  export const selectBook = createSelector(selectBooksDictionary, (books: Dictionary<Book>, id: number) => books[id]);

}

