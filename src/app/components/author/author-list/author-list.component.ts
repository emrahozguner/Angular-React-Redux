import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  title = 'List of Authors';
  constructor(public readonly authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.loadAuthors();
  }


  delete(id: number) {
    if (confirm('Are you sure do you want to delete this Book?')) {
      this.authorService.remove(id);
    }
  }

}
