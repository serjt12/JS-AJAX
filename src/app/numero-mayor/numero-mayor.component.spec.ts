import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroMayorComponent } from './numero-mayor.component';

describe('NumeroMayorComponent', () => {
  let component: NumeroMayorComponent;
  let fixture: ComponentFixture<NumeroMayorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroMayorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroMayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
