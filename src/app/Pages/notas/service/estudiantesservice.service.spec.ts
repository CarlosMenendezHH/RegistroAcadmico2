import { TestBed } from '@angular/core/testing';

import { EstudiantesserviceService } from './estudiantesservice.service';

describe('EstudiantesserviceService', () => {
  let service: EstudiantesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
