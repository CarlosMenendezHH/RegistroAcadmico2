import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalEComponent } from './menu-principal-e.component';

describe('MenuPrincipalEComponent', () => {
  let component: MenuPrincipalEComponent;
  let fixture: ComponentFixture<MenuPrincipalEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrincipalEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
