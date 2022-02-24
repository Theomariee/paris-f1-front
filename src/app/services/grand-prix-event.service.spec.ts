import { TestBed } from '@angular/core/testing';

import { GrandPrixEventService } from './grand-prix-event.service';

describe('GrandPrixEventService', () => {
  let service: GrandPrixEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrandPrixEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
