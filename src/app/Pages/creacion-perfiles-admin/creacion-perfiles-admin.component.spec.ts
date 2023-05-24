import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPerfilesAdminComponent } from './creacion-perfiles-admin.component';

describe('CreacionPerfilesAdminComponent', () => {
  let component: CreacionPerfilesAdminComponent;
  let fixture: ComponentFixture<CreacionPerfilesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionPerfilesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionPerfilesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
