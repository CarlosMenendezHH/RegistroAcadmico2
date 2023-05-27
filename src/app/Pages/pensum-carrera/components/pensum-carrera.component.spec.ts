import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensumCarreraComponent } from './pensum-carrera.component';

describe('PensumCarreraComponent', () => {
  let component: PensumCarreraComponent;
  let fixture: ComponentFixture<PensumCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensumCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensumCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
