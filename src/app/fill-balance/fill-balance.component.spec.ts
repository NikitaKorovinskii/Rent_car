import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBalanceComponent } from './fill-balnce.component';

describe('FillBalnceComponent', () => {
  let component: FillBalanceComponent;
  let fixture: ComponentFixture<FillBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
