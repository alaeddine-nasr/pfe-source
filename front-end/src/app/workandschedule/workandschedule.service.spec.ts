import { TestBed } from '@angular/core/testing';

import { Workandscheduleservice } from './workandschedule.service';

describe('WorkandscheduleService', () => {
  let service: Workandscheduleservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Workandscheduleservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
