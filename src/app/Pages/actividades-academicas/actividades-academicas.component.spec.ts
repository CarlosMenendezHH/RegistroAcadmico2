import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesAcademicasComponent } from './actividades-academicas.component';

describe('ActividadesAcademicasComponent', () => {
  let component: ActividadesAcademicasComponent;
  let fixture: ComponentFixture<ActividadesAcademicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesAcademicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesAcademicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
