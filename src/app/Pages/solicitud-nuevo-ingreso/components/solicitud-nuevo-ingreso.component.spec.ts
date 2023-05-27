import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudNuevoIngresoComponent } from './solicitud-nuevo-ingreso.component';

describe('SolicitudNuevoIngresoComponent', () => {
  let component: SolicitudNuevoIngresoComponent;
  let fixture: ComponentFixture<SolicitudNuevoIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudNuevoIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudNuevoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
