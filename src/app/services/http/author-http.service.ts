import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Author } from 'src/app/models/author.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpService {

  protected URL = 'http://localhost:3000/authors';
  constructor(
    private readonly http: HttpClient
  ) { }

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(
      this.URL
    ).pipe(catchError(x => {
      console.warn(x);
      return of([]);
    }));
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(this.URL + '/' + id);
  }

  public insert(author: Author): Observable<Author> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<Author>(this.URL, author, { headers });
  }

  public update(author: Author): Observable<Author> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<Author>(this.URL + '/' + author.id, author, { headers });
  }

  public delete(id): Observable<Author> {
    return this.http.delete<Author>(this.URL + '/' + id);
  }
}
