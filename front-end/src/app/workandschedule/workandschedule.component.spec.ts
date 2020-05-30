import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkandscheduleComponent } from './workandschedule.component';

describe('WorkandscheduleComponent', () => {
  let component: WorkandscheduleComponent;
  let fixture: ComponentFixture<WorkandscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkandscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkandscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
