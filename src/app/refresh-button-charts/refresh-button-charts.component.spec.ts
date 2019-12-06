import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshButtonChartsComponent } from './refresh-button-charts.component';

describe('RefreshButtonChartsComponent', () => {
  let component: RefreshButtonChartsComponent;
  let fixture: ComponentFixture<RefreshButtonChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshButtonChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshButtonChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
