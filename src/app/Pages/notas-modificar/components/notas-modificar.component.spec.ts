import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasModificarComponent } from './notas-modificar.component';

describe('NotasModificarComponent', () => {
  let component: NotasModificarComponent;
  let fixture: ComponentFixture<NotasModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
