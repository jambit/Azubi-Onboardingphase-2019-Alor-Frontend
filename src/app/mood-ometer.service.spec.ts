import { TestBed } from '@angular/core/testing';

import { MoodOMeterService } from './mood-ometer.service';

describe('MoodOMeterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoodOMeterService = TestBed.get(MoodOMeterService);
    expect(service).toBeTruthy();
  });
});
