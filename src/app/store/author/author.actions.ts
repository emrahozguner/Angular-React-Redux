
import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/models/author.model';


/****************************************
 * GET all the Authors
 ****************************************/
export const loadAuthors = createAction(
  '[Author/API] Load Authors'
);

export const loadAuthorsSuccess = createAction(
  '[Author/API] Load Authors Success',
  props<{ authors: Author[] }>()
);

export const loadAuthorsFailure = createAction(
  '[Author/API] Load Authors Failure',
  props<{ errorMessage: string }>()
);

/****************************************
 * GET Author by id
 ****************************************/

export const loadAuthor = createAction(
  '[Author/API] Load Author',
  props<{ id: number }>()
);

export const loadAuthorSuccess = createAction(
  '[Author/API] Load Author Success',
  props<{ author: Author }>()
);

export const loadAuthorFailure = createAction(
  '[Author/API] Load Author Failure',
  props<{ errorMessage: string }>()
);
/****************************************
 * ADD new Author
 ****************************************/
export const addAuthor = createAction(
  '[Author/API] Create Author',
  props<{ author: Author }>()
);

export const addAuthorSuccess = createAction(
  '[Author/API] Create Author Success',
  props<{ author: Author }>()
);

export const addAuthorFailure = createAction(
  '[Author/API] Create Author Failure',
  props<{ errorMessage: string }>()
);
/****************************************
 * REMOVE a Author by id
 ****************************************/
export const removeAuthor = createAction(
  '[Author/API] Remove Author',
  props<{ id: number }>()
);

export const removeAuthorSuccess = createAction(
  '[Author/API] Remove Author Success',
  props<{ author: Author }>()
);

export const removeAuthorFailure = createAction(
  '[Author/API] Remove Author Failure',
  props<{ errorMessage: string }>()
);
/****************************************
 * UPDATE game by id
 ****************************************/
export const updateAuthor = createAction(
  '[Author/API] Update Author',
  props<{ author: Author }>()
);

export const updateAuthorSuccess = createAction(
  '[Author/API] Update Author Success',
  props<{ author: Author }>()
);

export const updateAuthorFailure = createAction(
  '[Author/API] Update Author Failure',
  props<{ errorMessage: string }>()
);

