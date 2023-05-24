import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionClavesComponent } from './recuperacion-claves.component';

describe('RecuperacionClavesComponent', () => {
  let component: RecuperacionClavesComponent;
  let fixture: ComponentFixture<RecuperacionClavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperacionClavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionClavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
