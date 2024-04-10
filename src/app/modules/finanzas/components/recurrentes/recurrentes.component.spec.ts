import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrentesComponent } from './recurrentes.component';

describe('RecurrentesComponent', () => {
  let component: RecurrentesComponent;
  let fixture: ComponentFixture<RecurrentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecurrentesComponent]
    });
    fixture = TestBed.createComponent(RecurrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
