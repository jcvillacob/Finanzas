import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenMetasComponent } from './resumen-metas.component';

describe('ResumenMetasComponent', () => {
  let component: ResumenMetasComponent;
  let fixture: ComponentFixture<ResumenMetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenMetasComponent]
    });
    fixture = TestBed.createComponent(ResumenMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
