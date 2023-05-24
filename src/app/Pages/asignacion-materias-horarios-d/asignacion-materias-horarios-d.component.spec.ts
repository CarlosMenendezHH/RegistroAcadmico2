import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionMateriasHorariosDComponent } from './asignacion-materias-horarios-d.component';

describe('AsignacionMateriasHorariosDComponent', () => {
  let component: AsignacionMateriasHorariosDComponent;
  let fixture: ComponentFixture<AsignacionMateriasHorariosDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionMateriasHorariosDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionMateriasHorariosDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
