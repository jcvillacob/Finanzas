import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenDeudasComponent } from './resumen-deudas.component';

describe('ResumenDeudasComponent', () => {
  let component: ResumenDeudasComponent;
  let fixture: ComponentFixture<ResumenDeudasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenDeudasComponent]
    });
    fixture = TestBed.createComponent(ResumenDeudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
