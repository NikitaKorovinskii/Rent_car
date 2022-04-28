import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRentCarComponent } from './modal-rent-car.component';

describe('ModalRentCarComponent', () => {
  let component: ModalRentCarComponent;
  let fixture: ComponentFixture<ModalRentCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRentCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
