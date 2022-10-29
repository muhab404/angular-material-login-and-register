import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dash3Component } from './dash3.component';

describe('Dash3Component', () => {
  let component: Dash3Component;
  let fixture: ComponentFixture<Dash3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dash3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dash3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
