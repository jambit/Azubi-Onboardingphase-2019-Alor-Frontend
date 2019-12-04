import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalTableComponent } from './arrival-table.component';

describe('ArrivalTableComponent', () => {
  let component: ArrivalTableComponent;
  let fixture: ComponentFixture<ArrivalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
