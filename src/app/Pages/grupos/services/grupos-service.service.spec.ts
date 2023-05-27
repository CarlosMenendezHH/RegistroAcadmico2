import { TestBed } from '@angular/core/testing';

import { GruposServiceService } from './grupos-service.service';

describe('GruposServiceService', () => {
  let service: GruposServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruposServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
