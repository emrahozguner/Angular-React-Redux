import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {
  protected URL = 'http://localhost:3000/books';
  constructor(
    private readonly http: HttpClient
  ) { }

  public getBooks(): Observable<Book[]> {


    return this.http.get<Book[]>(
      this.URL
    ).pipe(catchError(x => {
      console.warn(x);
      return of([]);
    }));
  }

  public getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.URL + '/' + id);
  }

  public insert(book: Book): Observable<Book> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<Book>(this.URL, book, { headers });
  }

  public update(book: Book): Observable<Book> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<Book>(this.URL + '/' + book.id, book, { headers });
  }

  public delete(id): Observable<Book> {
    return this.http.delete<Book>(this.URL + '/' + id);
  }
}
