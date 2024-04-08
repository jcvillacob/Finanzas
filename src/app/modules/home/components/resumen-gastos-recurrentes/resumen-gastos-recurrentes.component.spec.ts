import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenGastosRecurrentesComponent } from './resumen-gastos-recurrentes.component';

describe('ResumenGastosRecurrentesComponent', () => {
  let component: ResumenGastosRecurrentesComponent;
  let fixture: ComponentFixture<ResumenGastosRecurrentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenGastosRecurrentesComponent]
    });
    fixture = TestBed.createComponent(ResumenGastosRecurrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
