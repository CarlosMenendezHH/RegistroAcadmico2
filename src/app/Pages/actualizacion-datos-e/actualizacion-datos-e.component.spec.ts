import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionDatosEComponent } from './actualizacion-datos-e.component';

describe('ActualizacionDatosEComponent', () => {
  let component: ActualizacionDatosEComponent;
  let fixture: ComponentFixture<ActualizacionDatosEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizacionDatosEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizacionDatosEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
