import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionCarreraComponent } from './inscripcion-carrera.component';

describe('InscripcionCarreraComponent', () => {
  let component: InscripcionCarreraComponent;
  let fixture: ComponentFixture<InscripcionCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
