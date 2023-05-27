import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCarreraComponent } from './materias-carrera.component';

describe('MateriasCarreraComponent', () => {
  let component: MateriasCarreraComponent;
  let fixture: ComponentFixture<MateriasCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
