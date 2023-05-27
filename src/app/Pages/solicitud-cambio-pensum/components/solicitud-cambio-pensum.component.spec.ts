import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCambioPensumComponent } from './solicitud-cambio-pensum.component';

describe('SolicitudCambioPensumComponent', () => {
  let component: SolicitudCambioPensumComponent;
  let fixture: ComponentFixture<SolicitudCambioPensumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCambioPensumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudCambioPensumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
