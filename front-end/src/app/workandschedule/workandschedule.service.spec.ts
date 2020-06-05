import { TestBed } from '@angular/core/testing';

import { WorkandscheduleService } from './workandschedule.service';

describe('WorkandscheduleService', () => {
  let service: WorkandscheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkandscheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
