import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodOMeterComponent } from './mood-ometer.component';

describe('MoodOMeterComponent', () => {
  let component: MoodOMeterComponent;
  let fixture: ComponentFixture<MoodOMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodOMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodOMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
