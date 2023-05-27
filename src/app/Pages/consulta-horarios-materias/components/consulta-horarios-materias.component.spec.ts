import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHorariosMateriasComponent } from './consulta-horarios-materias.component';

describe('ConsultaHorariosMateriasComponent', () => {
  let component: ConsultaHorariosMateriasComponent;
  let fixture: ComponentFixture<ConsultaHorariosMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaHorariosMateriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaHorariosMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
