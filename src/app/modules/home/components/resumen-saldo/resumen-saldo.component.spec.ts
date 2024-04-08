import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenSaldoComponent } from './resumen-saldo.component';

describe('ResumenSaldoComponent', () => {
  let component: ResumenSaldoComponent;
  let fixture: ComponentFixture<ResumenSaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenSaldoComponent]
    });
    fixture = TestBed.createComponent(ResumenSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
