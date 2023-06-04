import { TestBed } from '@angular/core/testing';

import { CalendarioacademicoService } from './calendarioacademico.service';

describe('CalendarioacademicoService', () => {
  let service: CalendarioacademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarioacademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
