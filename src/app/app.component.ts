import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  title = 'LibraryWeb';
  constructor(public readonly bookService: BookService,
              public readonly authorService: AuthorService) { }

  ngOnInit() {
    this.bookService.loadBooks();
    this.authorService.loadAuthors();
  }
}
