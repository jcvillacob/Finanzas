import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenGastosComponent } from './resumen-gastos.component';

describe('ResumenGastosComponent', () => {
  let component: ResumenGastosComponent;
  let fixture: ComponentFixture<ResumenGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenGastosComponent]
    });
    fixture = TestBed.createComponent(ResumenGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
