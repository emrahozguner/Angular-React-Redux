import { TestBed } from '@angular/core/testing';

import { BookHttpService } from './book-http.service';

describe('BookHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookHttpService = TestBed.get(BookHttpService);
    expect(service).toBeTruthy();
  });
});
