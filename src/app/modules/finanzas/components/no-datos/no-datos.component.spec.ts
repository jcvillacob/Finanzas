import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDatosComponent } from './no-datos.component';

describe('NoDatosComponent', () => {
  let component: NoDatosComponent;
  let fixture: ComponentFixture<NoDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoDatosComponent]
    });
    fixture = TestBed.createComponent(NoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
