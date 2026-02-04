import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userbio } from './userbio';

describe('Userbio', () => {
  let component: Userbio;
  let fixture: ComponentFixture<Userbio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userbio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userbio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
