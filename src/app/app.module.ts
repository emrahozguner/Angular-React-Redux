import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book/book.effects';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { AuthorEditComponent } from './components/author/author-edit/author-edit.component';
import { AuthorCreateComponent } from './components/author/author-create/author-create.component';
import { AuthorDetailComponent } from './components/author/author-detail/author-detail.component';
import { AuthorEffects } from './store/author/author.effects';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    AuthorListComponent,
    AuthorEditComponent,
    AuthorCreateComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([BookEffects, AuthorEffects]),
  ],
  entryComponents: [
    BookListComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    AuthorCreateComponent,
    AuthorEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
