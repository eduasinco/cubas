import { TestBed } from '@angular/core/testing';

import { CubasService } from './cubas.service';

describe('CubasService', () => {
  let service: CubasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
