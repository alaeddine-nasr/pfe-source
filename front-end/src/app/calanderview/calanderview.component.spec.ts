import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalanderviewComponent } from './calanderview.component';

describe('CalanderviewComponent', () => {
  let component: CalanderviewComponent;
  let fixture: ComponentFixture<CalanderviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalanderviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalanderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
