import { TestBed } from '@angular/core/testing';

import { GetartistsService } from './getartists.service';

describe('GetartistsService', () => {
  let service: GetartistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetartistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
