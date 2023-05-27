import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesPorcentajesComponent } from './evaluaciones-porcentajes.component';

describe('EvaluacionesPorcentajesComponent', () => {
  let component: EvaluacionesPorcentajesComponent;
  let fixture: ComponentFixture<EvaluacionesPorcentajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionesPorcentajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionesPorcentajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
