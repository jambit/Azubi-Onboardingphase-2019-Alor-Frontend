import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalTableUserInputComponent } from './arrival-table-user-input.component';

describe('ArrivalTableUserInputComponent', () => {
  let component: ArrivalTableUserInputComponent;
  let fixture: ComponentFixture<ArrivalTableUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalTableUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalTableUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
