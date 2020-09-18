import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCancelBtnComponent } from './add-cancel-btn.component';

describe('AddCancelBtnComponent', () => {
  let component: AddCancelBtnComponent;
  let fixture: ComponentFixture<AddCancelBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCancelBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCancelBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
