import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, filter, takeUntil } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { Observable, Subject } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {
  book$: Observable<Book>;
  author$: Observable<Author>;
  destroyed$ = new Subject<boolean>();
  imageUrl: string;

  public form: FormGroup;
  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly bookService: BookService,
    public readonly authorService: AuthorService,
    formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      ['id']: [null],
      ['image']: [null],
      ['title']: [null, Validators.min(0)],
      // ['author']: [null, Validators.min(0)],
      ['description']: [null, Validators.min(0)],
      ['authorId']: [null]
    });
  }

  ngOnInit() {
    const id$ = this.route.params.pipe(
      map(x => parseInt(x.id, 10))
    );

    id$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(id => this.bookService.loadBook(id));

    this.book$ = id$.pipe(
      switchMap(id => this.bookService.getBookById(id)),
      filter(x => Boolean(x))
    );

    this.book$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.setFormValue(x);
        this.imageUrl = x.image;
      });
  }

  reset() {
    this.form.patchValue({
      // author: '',
      description: '',
      title: ''
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  onSaveBook() {
    this.bookService.update(this.form.value);
  }

  onBack() {
    this.router.navigate(['/books']);
  }

  onDeleteBook() {
    if (confirm('Are you sure do you want to delete this Book?')) {
      this.bookService.remove(this.form.get('id').value);
    }
  }

  private setFormValue(book: Book): void {
    this.form.patchValue({
      id: book.id,
      title: book.title,
      // author: book.author,
      authorId: book.authorId,
      description: book.description,
      image: book.image,
    });
  }
}
