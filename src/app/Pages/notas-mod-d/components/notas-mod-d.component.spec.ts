import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasModDComponent } from './notas-mod-d.component';

describe('NotasModDComponent', () => {
  let component: NotasModDComponent;
  let fixture: ComponentFixture<NotasModDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasModDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasModDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
