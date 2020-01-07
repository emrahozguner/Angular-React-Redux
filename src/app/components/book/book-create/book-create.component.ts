import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject<boolean>();

  public form: FormGroup;
  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly bookService: BookService,
    formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      ['id']: [null],
      ['image']: [null],
      ['title']: [null, Validators.min(0)],
      ['author']: [null, Validators.min(0)],
      ['description']: [null, Validators.min(0)],
    });
  }

  ngOnInit() {
    this.setFormValue();
  }

  reset() {
    this.setFormValue();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  onSaveBook() {
    this.bookService.insert(this.form.value);
  }

  onBack() {
    this.router.navigate(['/books']);
  }

  private setFormValue(): void {
    this.form.patchValue({
      author: '',
      description: '',
      title: ''
    });
  }
}
