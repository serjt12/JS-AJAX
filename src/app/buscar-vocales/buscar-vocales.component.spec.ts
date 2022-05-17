import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVocalesComponent } from './buscar-vocales.component';

describe('BuscarVocalesComponent', () => {
  let component: BuscarVocalesComponent;
  let fixture: ComponentFixture<BuscarVocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarVocalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
