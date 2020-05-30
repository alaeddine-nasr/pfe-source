import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigbodyComponent } from './configbody.component';

describe('ConfigbodyComponent', () => {
  let component: ConfigbodyComponent;
  let fixture: ComponentFixture<ConfigbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
