import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { Author } from '../models/author.model';
import { Observable } from 'rxjs';
import { AuthorSelectors } from '../store/author/author.selectors';
import { loadAuthor, addAuthor, updateAuthor, removeAuthor, loadAuthors } from '../store/author/author.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private readonly store: Store<State>) { }

  public loadAuthors(): void {
    this.store.dispatch(loadAuthors());
  }
  
  public loadAuhtor(id: number): void {
    this.store.dispatch(loadAuthor({ id }));
  }

  public get authors$(): Observable<Author[]> {
    return this.store.pipe(select(AuthorSelectors.selectAuthors));
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.store.pipe(select(AuthorSelectors.selectAuthor, id));
  }

  public insert(author: Author): void {
    this.store.dispatch(addAuthor({ author }));
  }

  public update(author: Author): void {
    this.store.dispatch(updateAuthor({ author }));
  }

  public remove(id: number): void {
    this.store.dispatch(removeAuthor({ id }));
  }
}
