import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AuthorActions from './author.actions';
import { Author } from 'src/app/models/author.model';

export const authorsFeatureKey = 'authors';

export interface State extends EntityState<Author> {
  done: boolean | false;
  // additional entities state properties
}

export const adapter: EntityAdapter<Author> = createEntityAdapter<Author>();

export const initialState: State = adapter.getInitialState({
  done: false
  // additional entity state properties
});

const bookReducer = createReducer(
  initialState,
  on(AuthorActions.loadAuthors, (state, action) => {
    return ({ ...state, done: false });
  }),
  on(AuthorActions.loadAuthorsSuccess,
    (state, action) => adapter.addAll(action.authors, { ...state, done: true })
  ),
  on(AuthorActions.loadAuthorSuccess,
    (state, action) => adapter.upsertOne(action.author, { ...state, done: true })
  ),
  on(AuthorActions.removeAuthorSuccess,
    (state, action) => adapter.removeOne(action.author.id, { ...state, done: true })
  ),
  on(AuthorActions.updateAuthorSuccess,
    (state, action) => adapter.upsertOne(action.author, { ...state, done: true })
  ),
  on(AuthorActions.addAuthorSuccess,
    (state, action) => adapter.addOne(action.author, { ...state, done: true })
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



