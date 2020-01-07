import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    loadAuthors, loadAuthorsSuccess, loadAuthorsFailure,
    loadAuthor, loadAuthorSuccess, loadAuthorFailure, addAuthor,
    addAuthorSuccess, addAuthorFailure, updateAuthorFailure, updateAuthorSuccess,
    updateAuthor, removeAuthor, removeAuthorSuccess, removeAuthorFailure
} from './author.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthorHttpService } from 'src/app/services/http/Author-http.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthorEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly httpService: AuthorHttpService,
        private readonly router: Router) { }

    @Effect()
    loadAuthorsEffect = this.actions$.pipe(
        ofType(loadAuthors),
        switchMap(() => this.httpService.getAuthors().pipe(
            map(authors => loadAuthorsSuccess({ authors })),
            catchError((e) => of(loadAuthorsFailure(e)))
        )
        ));

    @Effect()
    loadAuthorEffect = this.actions$.pipe(
        ofType(loadAuthor),
        switchMap(({ id }) => this.httpService.getAuthorById(id).pipe(
            map(author => loadAuthorSuccess({ author })),
            catchError((e) => of(loadAuthorFailure(e)))
        )
        ));

    @Effect()
    saveAuthorEffect = this.actions$.pipe(
        ofType(addAuthor),
        switchMap(({ author }) => this.httpService.insert(author).pipe(
            map(newAuthor => addAuthorSuccess({ author: newAuthor })),
            catchError((e) => of(addAuthorFailure(e)))
        )
        ));

    @Effect({ dispatch: false })
    saveAuthorSuccessEffect = this.actions$.pipe(
        ofType(addAuthorSuccess),
        map(() => this.router.navigate(['/authors']))
    );

    @Effect()
    updateAuthorEffect = this.actions$.pipe(
        ofType(updateAuthor),
        switchMap(({ author }) => this.httpService.update(author).pipe(
            map(newAuthor => updateAuthorSuccess({ author: newAuthor })),
            catchError((e) => of(updateAuthorFailure(e)))
        )
        ));

    @Effect({ dispatch: false })
    updateAuthorSuccessEffect = this.actions$.pipe(
        ofType(updateAuthorSuccess),
        map(() => this.router.navigate(['/authors']))
    );

    @Effect()
    removeAuthorEffect = this.actions$.pipe(
        ofType(removeAuthor),
        switchMap(({ id }) => this.httpService.delete(id).pipe(
            map(newAuthor => removeAuthorSuccess({ author: newAuthor })),
            catchError((e) => of(removeAuthorFailure(e)))
        )
        ));

    @Effect({ dispatch: false })
    removeAuthorSuccessEffect = this.actions$.pipe(
        ofType(removeAuthorSuccess),
        map(() => this.router.navigate(['/authors']))
    );
}
