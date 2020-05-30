import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGeneralSettingsComponent } from './time-general-settings.component';

describe('TimeGeneralSettingsComponent', () => {
  let component: TimeGeneralSettingsComponent;
  let fixture: ComponentFixture<TimeGeneralSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeGeneralSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeGeneralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
