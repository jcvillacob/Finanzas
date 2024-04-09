import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosDiariosComponent } from './gastos-diarios.component';

describe('GastosDiariosComponent', () => {
  let component: GastosDiariosComponent;
  let fixture: ComponentFixture<GastosDiariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GastosDiariosComponent]
    });
    fixture = TestBed.createComponent(GastosDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
