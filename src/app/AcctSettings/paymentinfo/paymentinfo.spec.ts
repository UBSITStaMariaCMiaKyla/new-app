import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymentinfo } from './paymentinfo';

describe('Paymentinfo', () => {
  let component: Paymentinfo;
  let fixture: ComponentFixture<Paymentinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paymentinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paymentinfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
