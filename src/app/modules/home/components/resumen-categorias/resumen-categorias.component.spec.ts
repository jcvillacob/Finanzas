import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCategoriasComponent } from './resumen-categorias.component';

describe('ResumenCategoriasComponent', () => {
  let component: ResumenCategoriasComponent;
  let fixture: ComponentFixture<ResumenCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenCategoriasComponent]
    });
    fixture = TestBed.createComponent(ResumenCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
