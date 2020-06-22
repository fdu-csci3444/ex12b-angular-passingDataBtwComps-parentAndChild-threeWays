import { TestBed } from '@angular/core/testing';

import { Child3Service } from './child3.service';

describe('Child3Service', () => {
  let service: Child3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Child3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
