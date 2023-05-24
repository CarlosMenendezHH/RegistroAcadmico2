import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroCicloComponent } from './retiro-ciclo.component';

describe('RetiroCicloComponent', () => {
  let component: RetiroCicloComponent;
  let fixture: ComponentFixture<RetiroCicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroCicloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetiroCicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
