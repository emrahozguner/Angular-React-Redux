import { TestBed } from '@angular/core/testing';

import { AuthorHttpService } from './author-http.service';

describe('AuthorHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorHttpService = TestBed.get(AuthorHttpService);
    expect(service).toBeTruthy();
  });
});
