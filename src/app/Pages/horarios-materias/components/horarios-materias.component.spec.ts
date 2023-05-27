import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosMateriasComponent } from './horarios-materias.component';

describe('HorariosMateriasComponent', () => {
  let component: HorariosMateriasComponent;
  let fixture: ComponentFixture<HorariosMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosMateriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
