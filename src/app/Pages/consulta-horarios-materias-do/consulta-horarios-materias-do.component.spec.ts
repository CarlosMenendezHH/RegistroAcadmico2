import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHorariosMateriasDoComponent } from './consulta-horarios-materias-do.component';

describe('ConsultaHorariosMateriasDoComponent', () => {
  let component: ConsultaHorariosMateriasDoComponent;
  let fixture: ComponentFixture<ConsultaHorariosMateriasDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaHorariosMateriasDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaHorariosMateriasDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
