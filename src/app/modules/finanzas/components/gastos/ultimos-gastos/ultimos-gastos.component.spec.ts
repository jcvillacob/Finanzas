import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosGastosComponent } from './ultimos-gastos.component';

describe('UltimosGastosComponent', () => {
  let component: UltimosGastosComponent;
  let fixture: ComponentFixture<UltimosGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimosGastosComponent]
    });
    fixture = TestBed.createComponent(UltimosGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
