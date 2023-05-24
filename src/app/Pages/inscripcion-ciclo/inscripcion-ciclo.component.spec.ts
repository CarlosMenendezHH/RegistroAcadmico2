import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionCicloComponent } from './inscripcion-ciclo.component';

describe('InscripcionCicloComponent', () => {
  let component: InscripcionCicloComponent;
  let fixture: ComponentFixture<InscripcionCicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionCicloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
