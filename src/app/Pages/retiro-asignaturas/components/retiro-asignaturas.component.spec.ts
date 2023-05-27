import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroAsignaturasComponent } from './retiro-asignaturas.component';

describe('RetiroAsignaturasComponent', () => {
  let component: RetiroAsignaturasComponent;
  let fixture: ComponentFixture<RetiroAsignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroAsignaturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetiroAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
