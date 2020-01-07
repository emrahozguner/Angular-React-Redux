import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { AuthorDetailComponent } from './components/author/author-detail/author-detail.component';
import { AuthorCreateComponent } from './components/author/author-create/author-create.component';
import { AuthorEditComponent } from './components/author/author-edit/author-edit.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/detail/:id',
    component: BookDetailComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/edit/:id',
    component: BookEditComponent
  },
  {
    path: 'authors',
    component: AuthorListComponent
  },
  {
    path: 'authors/detail/:id',
    component: AuthorDetailComponent
  },
  {
    path: 'authors/create',
    component: AuthorCreateComponent
  },
  {
    path: 'authors/edit/:id',
    component: AuthorEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
