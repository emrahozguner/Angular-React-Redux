import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBook from './book/book.reducer';
import * as fromAuthor from './author/author.reducer';


export interface State {
  [fromBook.booksFeatureKey]: fromBook.State;
   [fromAuthor.authorsFeatureKey]: fromAuthor.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromBook.booksFeatureKey]: fromBook.reducer,
   [fromAuthor.authorsFeatureKey]: fromAuthor.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
