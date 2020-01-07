import { createSelector } from '@ngrx/store';
import { State } from '..';
import { authorsFeatureKey, selectAll, selectEntities } from './author.reducer';
import { Author } from 'src/app/models/Author.model';
import { Dictionary } from '@ngrx/entity';

// tslint:disable-next-line: no-namespace
export namespace AuthorSelectors {
  const selectAuthorsFeature = (state: State) => state[authorsFeatureKey];

  export const selectAuthors = createSelector(selectAuthorsFeature, selectAll);

  export const selectAuthorsDictionary = createSelector(selectAuthorsFeature, selectEntities);

  export const selectAuthor = createSelector(selectAuthorsDictionary, (Authors: Dictionary<Author>, id: number) => Authors[id]);

}

