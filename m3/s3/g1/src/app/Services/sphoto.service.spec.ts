import { TestBed } from '@angular/core/testing';

import { SphotoService } from './sphoto.service';

describe('SphotoService', () => {
  let service: SphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
