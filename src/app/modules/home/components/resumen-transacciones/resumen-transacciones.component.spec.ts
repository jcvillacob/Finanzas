import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenTransaccionesComponent } from './resumen-transacciones.component';

describe('ResumenTransaccionesComponent', () => {
  let component: ResumenTransaccionesComponent;
  let fixture: ComponentFixture<ResumenTransaccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenTransaccionesComponent]
    });
    fixture = TestBed.createComponent(ResumenTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
