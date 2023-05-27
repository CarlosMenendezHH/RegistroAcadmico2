import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAsignaturaHorariosComponent } from './inscripcion-asignatura-horarios.component';

describe('InscripcionAsignaturaHorariosComponent', () => {
  let component: InscripcionAsignaturaHorariosComponent;
  let fixture: ComponentFixture<InscripcionAsignaturaHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionAsignaturaHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionAsignaturaHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
