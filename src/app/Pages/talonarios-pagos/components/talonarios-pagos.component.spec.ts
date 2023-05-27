import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalonariosPagosComponent } from './talonarios-pagos.component';

describe('TalonariosPagosComponent', () => {
  let component: TalonariosPagosComponent;
  let fixture: ComponentFixture<TalonariosPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalonariosPagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalonariosPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
