import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCambioCarreraComponent } from './solicitud-cambio-carrera.component';

describe('SolicitudCambioCarreraComponent', () => {
  let component: SolicitudCambioCarreraComponent;
  let fixture: ComponentFixture<SolicitudCambioCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCambioCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudCambioCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
