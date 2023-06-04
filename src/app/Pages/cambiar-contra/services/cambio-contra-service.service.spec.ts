import { TestBed } from '@angular/core/testing';

import { CambioContraServiceService } from './cambio-contra-service.service';

describe('CambioContraServiceService', () => {
  let service: CambioContraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambioContraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
